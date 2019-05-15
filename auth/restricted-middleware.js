const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, secrets.jwtSecrets, (err, decodedToken) => {
           if(err){
               res.status(401).json({message:'coin is not right'})
           }else{
               req.decodedJWT = decodedToken;
               next()
           } 
        })
    }else{ res.status(401).json({ message: "werwjoha snoianer k"})}
}