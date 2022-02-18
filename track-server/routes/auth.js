const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require("../models/userData")
const jwt = require('jsonwebtoken')


router.get("/users", (req,res)=> {
    User.find((err, db) => {
        db ? res.json(db) : res.json(err)
    })
})

router.post('/register', (req,res)=> {
    const saltRounds = bcrypt.genSalt(6);
    const {username, password} = req.body;

    bcrypt.hash(password, 7, (err, hash)=> {
        if(hash){
            const newUser = new User({
                username: username,
                password: hash
            })
            newUser.save((err, user) => {
                if(user) {
                    const token = jwt.sign({userId: user._id}, 'ELON-MUSK')
                    res.status(200).json(token)
                }
            })
        } else {
            res.json(err)
        }
    })
    
})


router.post('/login', (req,res)=> {
    const {username, password} = req.body;
    User.findOne(
       {username: username},
       (err, user) => {
            err ? res.status(500).json(err) :
            user && bcrypt.compare(password, user.password, (err, isMatch)=> {
                if(isMatch) {
                    const token = jwt.sign({userId: user._id}, 'ELON-MUSK')
                    res.status(200).json(token)
                }
            })
       }
   )
})

module.exports = router;