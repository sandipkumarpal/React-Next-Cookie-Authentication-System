import express from 'express';

//  Create express route
const router = express.Router()

router.get('/register', (req, res) => {
    res.send('You hit Register endpoint')
})

module.exports = router;
