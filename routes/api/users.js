const express = require('express');
const router = express.Router();

// @route    POST api/user
// @desc     Register user
// @access   Public
router.get('/', (req, res) => res.send('Users route'));

module.exports = router;    