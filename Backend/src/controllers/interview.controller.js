const {pdfParse} = require('pdf-parse');
const generateInterViewReport = require('../services/ai.services.js'); 
const interViewReportModel = require('../models/interviewReport.model.js');

async function generateInterViewReportController(req,res){
    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText() 
    const {selfDescription, jobDescription} = req.body;
    const interViewReportByAi = await generateInterViewReport({
        resume : resumeContent.text,
        selfDescription,
        jobDescription
    });
    const interViewReport = await interViewReportModel.create({
        user : req.user.id,
        resume : resumeContent.text,
        selfDescription,
        jobDescription,
        ...interViewReportByAi
    })
res.status(201).json({
    message : "Interview report generated successfully",
    interViewReport
})

}

module.exports = { generateInterViewReportController };