import express from 'express'
const router = express.Router()
const UserModel = require('../models/user.model.js')

// return all users
router.get('/', async (req, res, next) => {
  const users = await UserModel.find({}).exec()
  res.json({users})
});

// return the user given the id
router.get('/:username', async (req, res) => {
  const { username } = req.params
  let user = await UserModel.findOne({ username }).exec();
  user = await UserModel.populate(user, { path: 'chatrooms' });
  res.json({ user })
});

//update user bio
router.post('/changeBio/:id', async (req, res, next) => {
  const { id } = req.params;
  const { bio } = req.body;
  const user = await UserModel.findById(id).exec();
  user.bio = bio;
  await user.save();
  res.json({ bio });
});

export default router
