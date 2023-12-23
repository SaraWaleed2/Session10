const express = require('express');
const User = require('../models/user');
const router = express.Router()

router.post("/users", (req, res) => {
    console.log(req.body);
    const user = new User(req.body)
    user.save()
        .then((user) => {
            res.send(user);
        })
        .catch((e) => {
            res.send(e);
        })
})

module.exports = router