const LeaderBoardModel = require('../models/leaderboardsModel');
const router = require('express').Router();

const addScore = async (req, res, next) => {
    const wpm = req.body.wpm;
    const name = req.body.name;

    try {
        const newScore = new LeaderBoardModel({
            WPM : wpm,
            name : name
        });

        let score = await newScore.save();

        res.status.send(201).json({
            message: 'New Score Added',
            score: score
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
}

const viewLeaderboard = async (req, res, next) => {
    try {
        let result = await LeaderBoardModel.find({}).sort({ WPM: 1 }).limit(10);

        res.status(200).json({
            result: result
        });
        
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

router.put('/addScore', addScore);
router.get('/viewScores', viewLeaderboard);

module.exports = router;