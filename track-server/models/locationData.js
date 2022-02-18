const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
    coord: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    
    },
},{timestamps: true});


const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        default: '',
    },
    locations: [pointSchema]
})

module.exports = mongoose.model("track", trackSchema);
