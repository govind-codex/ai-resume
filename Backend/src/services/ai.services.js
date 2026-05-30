const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

async function invokeGeminiAI(){
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{
            role: "user",
            parts: [{"text": "Hello gemini, explain what is interview?"}],
        },],
    })
    console.log(response.text)
}

module.exports = invokeGeminiAI;