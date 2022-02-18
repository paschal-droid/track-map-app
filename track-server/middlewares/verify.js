const jwt = require('jsonwebtoken');
const mongoose  = require('mongoose')
const User = require('../models/userData')

module.exports =  (req, res, next) => {
   const { authorization } = req.headers;

   const token = authorization.replace('Bearer ', '')
   jwt.verify(token, 'ELON-MUSK', async (err, payload)=> {
       err && res.status(401).send({error: "You must login first"})
       const {userId} = payload;
        const user = await User.findById(userId)
        req.user = user;
        next();
   })
   
} 