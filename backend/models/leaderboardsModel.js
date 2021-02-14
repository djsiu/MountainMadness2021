const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderBoardSchema = new Schema(
    {
        WPM: Number,
        name: String,
        date: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Leaderboard', leaderBoardSchema);