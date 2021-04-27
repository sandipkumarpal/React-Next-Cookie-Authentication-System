import express from 'express';
import cors from 'cors';
import csrf from 'csurf';
import { readdirSync } from 'fs';
// import cookieParser from 'cookie-parser';
const morgan = require('morgan')
// import mongoose
const mongoose = require("mongoose");

// import dotenv
const dotenv = require("dotenv");
dotenv.config();

// CSRF Protection
const csrfProtection = csrf({ cookie: true })

//  Create express app
const app = express()

// database connection with MonogoDB
mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => console.log("DB Connected"))
    .catch(err => console.log("DB Connection Error: ", err));

// mongoose.connection.on("error", err => {
//     console.log(`DB connection error: ${err.message}`);
// });

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
// app.use(cookieParser())

// app.use((req, res, next) => {
//     console.log("This is my own middlewares")
//     next()
// })

// All routers call in one function
readdirSync('./routes').map(r => app.use('/api', require(`./routes/${r}`)))

// we need this because "cookie" is true in csrfProtection
app.use(csrfProtection)

app.get('/api/csrf-token', (req, res) => {
    // pass the csrfToken to the view
    res.json({ csrfToken: req.csrfToken() })
})

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
