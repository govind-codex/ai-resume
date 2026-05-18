const express = require('express');
const cookieParser = require("cookie-parser")
const authRouter = require('./routes/auth.route');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true, // Allow cookies to be sent
}));


app.use('/api/auth', authRouter);

module.exports = app;