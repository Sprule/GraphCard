const mongoose = require("mongoose");
const { Schema } = mongoose;
// import UserModel from './user.model'

const graphicsCardSchema = new Schema({
  name: String,
  description: String,
  brand: String,
  price: Number,
  stock: Number,
  sites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Site'}],
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GraphicsCard", graphicsCardSchema);
