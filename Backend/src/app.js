const express = require('express');
const cookieParser = require("cookie-parser")
const authRouter = require('./routes/auth.route');
const interviewRouter = require('./routes/interview.Routes');
const cors = require('cors');



const app = express();
const allowedOrigins = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

function isAllowedOrigin(origin) {
  if (!origin) {
    return true;
  }

  if (allowedOrigins.includes(origin)) {
    return true;
  }

  try {
    const url = new URL(origin);
    return (
      /^https:\/\/.*\.vercel\.app$/.test(url.origin) ||
      /^https:\/\/.*\.netlify\.app$/.test(url.origin)
    );
  } catch (error) {
    return false;
  }
}

app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(cors({
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked for origin: ${origin}`), false);
  },
  credentials: true,
}));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'AI Resume backend is running',
    health: 'ok',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ health: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/interview', interviewRouter);


module.exports = app;
