const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users)
        })
});

router.get('/:id', (req, res) => {
    User
        User
    .findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user)
      }
    })
    .catch(err => {
      res.status(404).send('This user was not found.')
    });
})

module.exports = router;