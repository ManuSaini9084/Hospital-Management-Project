import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
         
          <h3>Who We Are</h3>
          <p>
            
Zee Lifecare provides a reliable hospital management solution that transforms healthcare delivery. Our platform enables streamlined appointment scheduling, robust doctor management, and seamless patient-provider communication. Patients experience convenient online booking, personalized appointment slots, and enhanced data security. Administrators optimize resource allocation, fostering efficient staff scheduling and improved patient access. Committed to innovation and scalability, Zee Lifecare empowers healthcare professionals to prioritize patient care, enhancing satisfaction and productivity.
          </p>
          <p>
          <p>We Provides you-</p>
          <br />
          <ul>
            <li>&#8226; Appointment Scheduling</li>
            <li>&#8226; Doctor Management</li>
            <li>&#8226; Patient-Provider Communication</li>
            <li>&#8226; Customizable Appointment Slots</li>
            <li>&#8226; Data Security and Privacy</li>
            <li>&#8226; Resource Allocation Optimization</li>
            <li>&#8226; Scalability and Adaptability</li>
            <li>&#8226; Continuous Improvement</li>
            <li>&#8226; Enhanced Patient Experience</li>
            <li>&#8226; Empowered Healthcare Professionals</li>
          </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
