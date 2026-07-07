import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    
});

/**
 * @description service to generate an interview report based on user self description, resume and job description
 */
export const generateInterviewReport = async ({jobDescription, selfDescription, resumeFile}) => {
    const formData = new FormData();
    formData.append('jobDescription', jobDescription);
    formData.append('selfDescription', selfDescription);
    formData.append('resume', resumeFile);
    const response = await api.post('/api/interview', formData)
    console.log(response.data)
    return response.data
}
// export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {
//     try {
//         const formData = new FormData();

//         formData.append("jobDescription", jobDescription);
//         formData.append("selfDescription", selfDescription);
//         formData.append("resume", resumeFile);

//         const response = await api.post("/api/interview", formData);

//         console.log("SUCCESS:", response);
//         console.log("DATA:", response.data);

//         return response.data;
//     } catch (error) {
//         console.log("ERROR:", error);
//         console.log("STATUS:", error.response?.status);
//         console.log("RESPONSE:", error.response?.data);

//         throw error;
//     }
// };


/**
 * @description service to get an interview report by its ID. Only the candidate who owns the report can access it.
 */
export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/api/interview/report/${interviewId}`)
    return response.data
}


/**
 * @description service to get all interview reports of the authenticated user.
 */
export const getAllInterviewReports = async () => {
    const response = await api.get('/api/interview')
    return response.data
}