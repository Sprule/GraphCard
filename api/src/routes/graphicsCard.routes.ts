const express = require('express')
const router = express.Router()
const GraphicsCardModel = require('../models/graphicsCard.model.js')

// return all chatrooms
router.get('/all', async (req, res, next) => {
  const graphicsCards = await GraphicsCardModel.find({}).exec()
  res.json({graphicsCards})
});

// return the chatroom given the id
router.get('/:id', async (req, res, next) => {
  const graphicsCard = await GraphicsCardModel.findById(req.params.id).exec()

  res.json({graphicsCard})
});

export default router;
