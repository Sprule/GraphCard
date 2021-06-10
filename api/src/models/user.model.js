const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  usernameLower: String,
  emaiL: String,
  profileImage: String,
  password: String,
  graphicsCardsSubscribed: [{type: mongoose.Schema.Types.ObjectId, ref: 'GraphicsCard'}], // array of chatroom ids created by this user
  wall: [String],
  bio: String, 
  admin: {type: Boolean, default: false},
  date_joined: { type: Date, default: Date.now },
});
  
module.exports = mongoose.model('User', userSchema);