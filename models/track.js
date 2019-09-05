// music track
// ------------
// artist (String)
// year (Number)
// albumName (String)
// albumArt (String)
// trackNumber (Number (int))
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    // artist (String)
    artist: {
        type: String,
        trim: true,
        required: "Artist name is required"
    },
    // year (Number)
    year: {
        type: Number,
        trim: true,
        required: "Year is required"
    },
    // albumName (String)
    albumName: {
        type: String,
        trim: true,
        required: "Album name is required"
    },
    // albumArt (String)
    albumArt: {
        type: String,
        trim: true,
        required: false
    },
    // trackNumber (Number (int))
    trackNumber: {
        type: Number,
        trim: true,
        required: "Track number is required"
    }
});

const Track = new mongoose.model("Track", TrackSchema);
module.exports = Track;
