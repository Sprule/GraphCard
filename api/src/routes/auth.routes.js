const express = require('express')
const router = express.Router()
const passport = require('passport')
const UserModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(async (user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user) => {
      done(err, user);
  });
});

// Local Strategy
passport.use(
  new LocalStrategy( async (username, password, done) => {
    const user = await UserModel.findOne({
      usernameLower: username.toLowerCase(),
    }).exec()
    if (!user) {
      return done(null, false, 'User not found.')
    }

    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
      return done(null, false, 'Invalid password.')
    }

    const token = await generateUserToken(user)
    done(null, token)
  })
);

router.post("/register", async (req, res, next) => {
  const {username, password} = req.body
  console.log("User registered", req.body)

  let usernameLower = username.toLowerCase()

  const existingUsername = await UserModel.findOne({
    usernameLower: req.body.username.toLowerCase(),
    }).exec()
    if (existingUsername) {
      return res.status(400).json({
        error: 'Account already exists with that username.',
      })
    }

    // Hash password before saving in database
    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, usernameLower, password: hashedPassword });
    await newUser.save()

    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: `An error occured: ${err}` });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: `An error occured: ${err}` });
            }
            return res.status(200).json({ session: user, success: `logged in ${user._id}` });
        });
    })(req, res, next);
});

router.post("/login", (req, res, next) => {
  console.log("User has logged in", req.body)

  passport.authenticate("local", function(err, user, info) {
      req.logIn(user, function(err) {
          if (err) {
              return res.status(400).json({ errors: `An error occured: ${err}` });
          }
          return res.status(200).json({ session: user, success: `logged in ${user._id}` });
      });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout()
  res.json({})
})


// authenticatedUser middleware
const authenticatedUser = (req, res, next) => {
  // from passport.js middleware isAuthenticated()
  if (req.isAuthenticated()) { 
    return next()
  }
  res.status(401).json({
    error: 'Invalid authentication.',
  })
}

router.get('/session', authenticatedUser, async (req, res) => {
  const user = await UserModel.findById(req.user._id).exec()
  if (user) {
    res.json({ session: await generateUserToken(user) })
  } else {
    res.json({ session: null })
  }
})

// authenticatedAdmin middleware
const authenticatedAdmin = (req, res, next) => {
  // from passport.js middleware isAuthenticated()
  // and check admin boolean is true in user model
  if (req.isAuthenticated() && req.user.admin) {
    return next()
  }
  res.status(401).json({
    error: 'Invalid authentication.',
  })
}

router.get('/check_admin', authenticatedAdmin, (req, res) => {
  res.json({})
})

// The user info we return to the frontend
async function generateUserToken(user) {
  return {
    _id: user._id.toString(),
    username: user.username,
    bio: user.bio,
    time: Date.now(),
    
  }
}

module.exports = router;