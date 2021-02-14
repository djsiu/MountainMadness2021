const router = require('express').Router();
const leaderBoardRoutes = require('./routes/leaderboards');

// Set CORS Header info 
router.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

router.use(leaderBoardRoutes);

module.exports = router;