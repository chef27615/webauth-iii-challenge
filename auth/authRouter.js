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
    let { name, password } = req.body;
  
    Users.findBy({ name })
      .first()
      .then(user => {
          
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          console.log(token);
          res.status(200).json({
            message: `Welcome ${user.name}!`, token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  function generateToken(user) {
    const payload = {
      subject: user.id,
      name: user.name,
    }
    const options = {
      expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecrets, options);
  }

module.exports = router;