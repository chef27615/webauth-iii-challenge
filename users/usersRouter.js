const router = require('express').Router();
const Users = require('./users-model');
const restrictions = require('../auth/restricted-middleware');


router.get('/', restrictions, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.send(err)
    })
});

// router.use((req, res, next) => {
//     res.status(404).json({message:"no users here yet"})
// })

module.exports = router;