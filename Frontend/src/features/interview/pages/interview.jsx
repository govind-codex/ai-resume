import React, { useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import "../style/interview.scss"
import { useInterview } from '../../hook/useInterview.js'


// const defaultInterviewData = {
//   matchScore: 78,
//   technicalQuestions: [
//     {
//       question: "What is the difference between authentication and authorization?",
//       intention: "To evaluate the candidate's understanding of security concepts and access control mechanisms.",
//       answer: "Authentication verifies the identity of a user, while authorization determines what resources or actions the authenticated user is allowed to access."
//     },
//     {
//       question: "Explain how JWT authentication works in Node.js.",
//       intention: "To assess knowledge of token-based authentication and session management.",
//       answer: "JWT authentication works by generating a signed token after successful login. The client stores the token and sends it with subsequent requests. The server verifies the token's signature and extracts user information without maintaining session state."
//     },
//     {
//       question: "How does the Express.js middleware pipeline work?",
//       intention: "To test understanding of request processing and middleware execution flow.",
//       answer: "Express executes middleware functions sequentially in the order they are registered. Each middleware can modify the request or response objects, terminate the request, or pass control to the next middleware using next()."
//     }
//   ],
//   behavioralQuestions: [
//     {
//       question: "Tell me about yourself.",
//       intention: "To understand the candidate's background, communication skills, and career journey.",
//       answer: "Provide a concise summary covering education, relevant experience, key technical skills, notable projects, and career goals that align with the role."
//     },
//     {
//       question: "Describe a challenging bug you fixed and how you approached it.",
//       intention: "To evaluate problem-solving ability, debugging methodology, and persistence.",
//       answer: "Explain the issue, describe how you investigated it, the tools and techniques used, the solution implemented, and the outcome achieved."
//     },
//     {
//       question: "How do you handle tight project deadlines?",
//       intention: "To assess time management, prioritization, and ability to work under pressure.",
//       answer: "Discuss breaking work into priorities, communicating risks early, focusing on high-impact tasks, tracking progress, and maintaining quality while meeting deadlines."
//     }
//   ],
//   skillGaps: [
//     { skill: "System Design", reason: "Limited experience designing scalable applications." },
//     { skill: "Testing", reason: "Needs stronger knowledge of unit and integration testing." },
//     { skill: "Cloud Deployment", reason: "Limited hands-on experience with AWS and CI/CD pipelines." }
//   ],
//   preperationPlan: [
//     { day: 1, task: "Revise JavaScript fundamentals, closures, promises, and async/await." },
//     { day: 2, task: "Practice Node.js and Express.js interview questions." },
//     { day: 3, task: "Study MongoDB indexing, aggregation, and query optimization." },
//     { day: 4, task: "Build a small REST API with authentication and role-based access control." },
//     { day: 5, task: "Practice behavioral interview questions using the STAR method." },
//     { day: 6, task: "Review system design basics and API scalability concepts." },
//     { day: 7, task: "Conduct a mock interview and identify weak areas." }
//   ]
// }



const Interview = () => {

  const { report } = useInterview()
  
  const { interviewId } = useParams()
  const location = useLocation()
  const interviewData = location.state?.interviewData ?? report
  const [activeSection, setActiveSection] = useState('technical')

  const sections = useMemo(() => ([
    { key: 'technical', label: 'Technical questions', items: interviewData.technicalQuestions ?? [] },
    { key: 'behavioral', label: 'Behavioral questions', items: interviewData.behavioralQuestions ?? [] },
    { key: 'roadmap', label: 'Road Map', items: interviewData.preperationPlan ?? interviewData.preparationPlan ?? [] }
  ]), [interviewData])

  const activeSectionData = sections.find((section) => section.key === activeSection) ?? sections[0]

  return (
    <main className="interview-page">
      <section className="interview-shell">
        <aside className="interview-panel nav-panel">
          <div className="panel-card hero-card">
            <p className="eyebrow">Interview Plan</p>
            <h1 className="match-score">{interviewData.matchScore ?? 0}%</h1>
            <p className="hero-copy">
              Role fit overview for interview <span>#{interviewId ?? 'preview'}</span>
            </p>
          </div>

          <nav className="section-nav" aria-label="Interview sections">
            {sections.map((section) => (
              <button
                key={section.key}
                type="button"
                className={`nav-item ${activeSection === section.key ? 'active' : ''}`}
                onClick={() => setActiveSection(section.key)}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="interview-panel content-panel">
          <div className="panel-card content-header">
            <p className="eyebrow">{activeSectionData.label}</p>
            <h2>{activeSection === 'roadmap' ? 'Preparation plan' : 'Main content'}</h2>
            <p className="panel-description">
              {activeSection === 'technical' && 'Deep dive into the core technical areas the role is likely to cover.'}
              {activeSection === 'behavioral' && 'Practice concise, structured answers that highlight impact and collaboration.'}
              {activeSection === 'roadmap' && 'Follow this study plan to close the biggest gaps before the interview.'}
            </p>
          </div>

          <div className="panel-card content-body">
            {activeSection !== 'roadmap' ? (
              <div className="question-list">
                {activeSectionData.items.map((item, index) => (
                  <article className="question-card" key={`${item.question}-${index}`}>
                    <div className="question-topline">
                      <span className="question-index">{String(index + 1).padStart(2, '0')}</span>
                      <h3>{item.question}</h3>
                    </div>
                    <p className="question-intention">{item.intention}</p>
                    <div className="answer-box">
                      <span className="answer-label">Suggested answer</span>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="roadmap-list">
                {activeSectionData.items.map((item) => (
                  <article className="roadmap-card" key={item.day}>
                    <div className="roadmap-day">Day {item.day}</div>
                    <p>{item.task}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <aside className="interview-panel skill-panel">
          <div className="panel-card">
            <p className="eyebrow">Skill Gaps</p>
            <div className="skill-chip-group">
              {(interviewData.skillGaps ?? []).map((skill) => (
                <span className="skill-chip" key={skill.skill}>
                  {skill.skill}
                </span>
              ))}
            </div>
          </div>

          <div className="panel-card skill-details">
            <h3>Why these gaps matter</h3>
            <div className="skill-detail-list">
              {(interviewData.skillGaps ?? []).map((skill) => (
                <div className="skill-detail" key={`${skill.skill}-${skill.reason}`}>
                  <span className="skill-name">{skill.skill}</span>
                  <p>{skill.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Interview
