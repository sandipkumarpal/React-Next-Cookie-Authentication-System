import express from 'express';

//  Create express route
const router = express.Router();

// Controllers
import { register, login, logout } from '../controllers/auth'

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router;
