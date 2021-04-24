import express from 'express';
import cors from 'cors';
import {readdirSync} from 'fs';
const morgan = require('morgan')

require('dotenv').config();

//  Create express app
const app = express()

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
// app.use((req, res, next) => {
//     console.log("This is my own middlewares")
//     next()
// })

// All routers call in one function
readdirSync('./routes').map(r => app.use('/api', require(`./routes/${r}`)))

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
