import React, { useState } from 'react';
import './about.css';
import myimg from '../about/virat.jpg';


export const About = () => {
  const [activeSection, setActiveSection] = useState('education'); 

  return (
    <div className='about' id='about-us'>
      <img src={myimg} alt="Profile" className="profile-img" />

      <div className="about-section">
        <h2>ABOUT ME</h2>
        <h3>Java Full Stack <span>& DevOps Developer</span></h3>
        <p>
          I'm Vivek Singh, a passionate Java Full Stack and DevOps developer skilled in Java, Spring Boot, Hibernate, and REST APIs on the backend, 
          with expertise in React.js for the frontend. I have experience working with relational and NoSQL databases, including MySQL and MongoDB.  
          Alongside development, I’m proficient in DevOps practices, including CI/CD pipelines, Docker, Kubernetes, and cloud platforms like AWS.  
          I love building scalable, high-performance applications and automating deployment workflows.  
          A fast learner and team player, I'm always eager to explore new tools and technologies to deliver robust solutions.
        </p>

        <div className="buttons">
          <button
            className={`btn ${activeSection === 'education' ? 'yellow' : 'outline'}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>

           <button
            className={`btn ${activeSection === 'exprince' ? 'yellow' : 'outline'}`}
            onClick={() => setActiveSection('exprince')}
          >
            Exprince
          </button>

          <button
            className={`btn ${activeSection === 'certification' ? 'yellow' : 'outline'}`}
            onClick={() => setActiveSection('certification')}
          >
            Certification
          </button>
        </div>



        {activeSection === 'education' && (
          <div className="edu-cert-section">
            <div className="card">
              <p>2021-2023</p>
              <h3>MCA- Computer Application <span>8.2 CGPA</span></h3>
              <p>Lakshmi Narain College of Technology - Bhopal</p>
            </div>
            <div className="card">
              <p>2017-2020</p>
              <h3>BSC(Computer Science) <span>65%</span></h3>
              <p>APS University - Rewa</p>
            </div>
          </div>
        )}

        {activeSection === 'exprince' && (
          <div className="edu-cert-section">
            <div className="card">
              <p>Oct-2024 - 2025-Onging</p>
              <h3>Java Developer</h3>
              <p>Zecdata Technology - Indore</p>
            </div>
            <div className="card">
              <p>March 2024 - Aug 2024</p>
              <h3>Java Developer</h3>
              <p>Epam(Internship)</p>
            </div>
          
          </div>
        )}

        {activeSection === 'certification' && (
          <div className="edu-cert-section">
            <div className="card">
              <p>2023 - 2024</p>
              <h3>Full Stack Development - Java</h3>
              <p>Jspider - Bengaluru</p>
            </div>
            <div className="card">
              <p>1000+(Problems)</p>
              <h3>Data structures and Algorithms</h3>
              <p>LeetCode & GeeksforGeeks</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
