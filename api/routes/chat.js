var express = require('express');
var router = express.Router();
var chat = require('../models/chat')

/* GET users listing. */
router.get('/', (req, res) => {
  chat.find({}, (err, chats)=>{
    if(err) return res.status(500).json({err})
    res.status(200).json(chats)
  })
});

  router.post('/', (req, res) => {
    chat.create({id: req.body.id, nama: req.body.nama, chat: req.body.chat })
      .then(chatItem => {
        res.status(200).json({
          chatAdded: chatItem
        })
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Something wrong while adding Data."
        })
      });
  })

  router.put('/:id', (req, res) => {
    chat.findOneAndUpdate({id: parseInt(req.params.id)}, { nama: req.body.nama, chat: req.body.chat })
      .then(chatItem => {
        res.status(200).json({
          chatEdited: chatItem
        })
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Something wrong while edit Data."
        })
      });
  })

  router.delete('/:id', (req, res) => {
    chat.findOneAndRemove({id: parseInt(req.params.id)})
      .then(chatItem => {
        res.status(200).json({
          chatDeleted: chatItem
        });
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Something wrong while deleting Data."
        })
      });
  });

  module.exports = router;
