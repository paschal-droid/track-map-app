const router = require('express').Router()
const verify = require('../middlewares/verify')
const mongoose = require("mongoose")


const Track = require('../models/locationData')


router.use(verify)

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({userId: req.user._id})
    res.send(tracks)
})

router.post('/tracks', async (req,res) => {
    const {name, location} = req.body;

    !name || !location && res.status(422).send('Must provide a name and location')
    
    const track = new Track({name, location, userId: req.user._id})
    track.save((err, savedItem) => {
        savedItem ? res.status(200).send({savedItem}) : res.status(422).send('something went wrong')
    }) 

})

module.exports = router;