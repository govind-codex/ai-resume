import React, { useState } from 'react'
import "../style/home.scss"

const Home = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [selfDescription, setSelfDescription] = useState('');

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files?.[0]) {
      setResume(files[0]);
    }
  };

  const isFormValid = resume || selfDescription.trim();

  return (
    <main className='home'>
      <div className="page-header">
        <h1 className="page-title">
          Create Your Custom <span className="highlight">Interview Plan</span>
        </h1>
        <p className="page-subtitle">
          Let our AI analyze the job requirements and your unique profile to build a winning strategy
        </p>
      </div>

      <div className="interview-container">
        <div className="interview-content">
          <div className="section-column left-section">
            <div className="section-header">
              <span className="section-icon">📌</span>
              <h2>TARGET JOB DESCRIPTION</h2>
            </div>
            <textarea
              name="jobDescription"
              id="jobDescription"
              placeholder='Paste the full job description here... e.g. "Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design..."'
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="input-textarea"
            ></textarea>
            <div className="character-count">0 / 5000 chars</div>
          </div>

          <div className="section-column right-section">
            <div className="profile-section">
              <div className="section-header">
                <span className="section-icon">👤</span>
                <h2>YOUR PROFILE</h2>
              </div>

              <div className="resume-upload-group">
                <div className="upload-label">Upload Resume <small className="required">(Red Rightful)</small></div>
                <div
                  className="file-drop-zone"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('resume').click()}
                >
                  <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v20m10-10H2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="upload-text">Click to upload or drag & drop</p>
                  <p className="upload-subtext">PDF or DOCX (MAX 5MB)</p>
                </div>
                <input
                  hidden
                  type="file"
                  name="resume"
                  id="resume"
                  accept='.pdf,.docx'
                  onChange={handleResumeChange}
                />
                {resume && <div className="file-name">📄 {resume.name}</div>}
              </div>

              <div className="divider">OR</div>

              <div className="description-group">
                <label htmlFor="selfDescription" className="input-label">Quick Self Description</label>
                <textarea
                  name="selfDescription"
                  id="selfDescription"
                  placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                  value={selfDescription}
                  onChange={(e) => setSelfDescription(e.target.value)}
                  className="input-textarea"
                ></textarea>
              </div>

              <div className="validation-message">
                <span className="message-icon">ℹ️</span>
                <p>Either a Resume or a Self Description is required to generate a personalized plan.</p>
              </div>

              <button
                className={`button primary-button ${!isFormValid ? 'disabled' : ''}`}
                disabled={!isFormValid}
              >
                ✨ Generate My Interview Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
