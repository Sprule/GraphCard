require('dotenv').config()
import express from "express";
import mongoose from "mongoose"
const session = require("express-session");
const MongoStore = require("connect-mongo");
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import graphicsCardRoutes from './routes/graphicsCard.routes'
import passport from 'passport';
import cors = require('cors')
import { Server } from "socket.io";

export let CLIENT_URL = process.env.PRODUCTION
  ? process.env.CLIENT_URL : 'http://localhost:3000'

const PORT = process.env.PORT || 3001;

var app = express();

const server = app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});

// Socket.io setup
export const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST"]
  },
});

io.on('connection', (socket) => {
  console.log("A user has connected")
});

const corsMiddleware = cors({
  origin: CLIENT_URL,
  credentials: true,
})
app.use(corsMiddleware)
app.options('*', corsMiddleware)

// express setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongo connection to online cluster
const mongoUrl = process.env.MONGO_URL
//const mongoUrl = 'mongodb://localhost:27017/graphCard'

mongoose
  .connect(mongoUrl, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('Connected to Database at: ', mongoUrl))

// Express Session
app.use(
  session({
      secret: "super-secret",
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({ mongoUrl: mongoUrl })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/graphicsCard', graphicsCardRoutes)




