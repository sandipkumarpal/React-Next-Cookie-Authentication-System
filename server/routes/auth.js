import express from 'express';

//  Create express route
const router = express.Router();

// Middleware
import { signInMiddleware } from '../middleware/authMiddleware';

// Controllers
import { register, login, logout, currentUser } from '../controllers/auth'

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/user', signInMiddleware, currentUser)

module.exports = router;
