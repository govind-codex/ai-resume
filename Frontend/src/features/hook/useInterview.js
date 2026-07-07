import {getAllInterviewReports, generateInterviewReport, getInterviewReportById } from "../interview/services/interview.api.js"
import { useContext } from "react"
import { InterviewContext } from "../interview/interview.context.jsx"

// const {context} = useContext(InterviewContext)
export const useInterview = () => {
    
    const context = useContext(InterviewContext)

    if(!context){
        throw new Error("useInterview must be used within an InterviewProvider")
    }
    const {loading, setLoading, report, setReport, reports, setReports} = context

    const generateReport = async ({jobDescription, selfDescription, resumeFile}) => {
        setLoading(true)
        let response = null
        try{
            response = await generateInterviewReport({jobDescription, selfDescription, resumeFile})
            setReport(response.interViewReport)
        } catch (error) {
            console.error("Error generating interview report:", error)
        } finally {
            setLoading(false)
        }
        return response.interViewReport
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        let response = null
        try{
            response = await getInterviewReportById(interviewId)
            setReport(response.interViewReport)
        }catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }
        return response.interViewReport
    }

    const getReports = async () => {
        setLoading(true)
        let response = null
        try{
            response = await getAllInterviewReports()
            setReports(response.interViewReports)
        } catch (error) {
            console.error("Error fetching interview reports:", error)
        } finally {
            setLoading(false)
        }
        return response.interViewReports
    }
    return {loading, report, reports, generateReport, getReportById, getReports };
}


