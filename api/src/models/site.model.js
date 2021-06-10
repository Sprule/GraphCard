const mongoose = require("mongoose");
const { Schema } = mongoose;
// import UserModel from './user.model'

const siteSchema = new Schema({
  websiteName: String,
  link: String,
  graphicsCard: [{type: mongoose.Schema.Types.ObjectId, ref: 'GraphicsCard'}],
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Site", siteSchema);
