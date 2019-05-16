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

router.delete('/:id', restrictions, async (req, res) => {
    try{
        const count = await Users.remove(req.params.id);
        count > 0 ? res.status(200).json({ message:"user deleted"}) : res.status(404).json({message:" can not find user"})

    } catch(err){
        res.status(500).json(err)
    }
})

router.put('/:id', restrictions, async (req, res) => {
    try{
        const updatedUser = await Users.update(req.params.id, req.body);
        updatedUser ? res.status(200).json(updatedUser) : res.status(404).json({ message:"can not locate user"})
    }catch(err){
        res.status(500).json(err)
    }
})







router.use((req, res, next) => {
    res.status(404).json({message:"no users here yet"})
})

module.exports = router;