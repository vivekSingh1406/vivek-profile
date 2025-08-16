import React from 'react';
import './service.css';
import fe from '../services/fe1.png';
import be from '../services/be1.png';
import ui from '../services/ui1.png';

export const Service = () => {
  return (
    <div className="services-section">
      <h3><span>My</span> Services</h3>
      <div className="services-container">

        {/* Frontend Service Card */}
        <div className="service-card">
          <img src={fe} alt="Frontend Development" />
          <h2>Frontend Development</h2>
          <p>
            Experienced in building clean, responsive UIs using HTML, CSS, JavaScript, and React — 
            with a focus on intuitive design and smooth user experiences.
          </p>
        </div>

        {/* Backend Service Card */}
        <div className="service-card">
          <img src={be} alt="Backend Development" />
          <h2>Backend Development</h2>
          <p>
            Skilled in creating scalable and efficient backends using Go, Java 8, Spring Boot, 
            Hibernate, MySQL, and MongoDB — with expertise in APIs, database management, 
            and seamless data flow.
          </p>
        </div>

        {/* Deployment Service Card */}
        <div className="service-card">
          <img src={ui} alt="Deployment" className="ui" />
          <h2 className="h2">Deployment</h2>
          <p>
            Proficient in deployment using Jenkins, Docker, Kubernetes, and ArgoCD — ensuring 
            reliable and automated service delivery.
          </p>
        </div>

      </div>
    </div>
  );
};
