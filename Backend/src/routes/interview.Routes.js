const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware.js');
const interviewRouter = express.Router();
const interviewController = require('../controllers/interview.controller');
const upload = require('../middlewares/file.middleware');


/**
 * @route POST /api/interview/
 * @desc Generate an interview report based on the candidate's resume, self-description, and the job description.
 * @access private
 */
interviewRouter.post("/", authMiddleware.authUser, upload.single('resume'), interviewController.generateInterViewReportController);

module.exports = interviewRouter;