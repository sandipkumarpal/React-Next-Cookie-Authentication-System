import express from 'express';

//  Create express route
const router = express.Router();

// Controllers
import { register } from '../controllers/auth'

router.post('/register', register)

module.exports = router;
