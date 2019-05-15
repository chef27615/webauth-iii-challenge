const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')


const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 15);
    user.password = hash;
    
    Users.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    let { name, password } =req.body
    Users.findBy({ name })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome Rosemary, yes, I know you are ${user.name}, but today you are Rosemary, have a token`, token
            });
        }else{res.status(404).json({message:"wrong login"})}
    })
    .catch(err => { res.status(500).json(err)})
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        name: user.name,
        department: user.department
    }

    const options= {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;