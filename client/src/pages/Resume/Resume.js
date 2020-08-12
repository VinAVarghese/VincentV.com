import React from 'react';
import Hero from "../../components/Hero/hero"
import './resume.css';

function Resume() {
  return (
    <>
    <Hero text="Resume"/>
    
    <section className="container">
      <figure className="row justify-content-center">
        <div className="col-sm-4 col-xs-8">
          <img className="img-fluid" id="biopic" src="./images/desatpic.jpg" alt="profilepic"/>
        </div>
      </figure>
      <figure className="row justify-content-center iframe-figure-div">
        <iframe title="resume" className="resume-window embed-responsive-item" src="./assets/vav_cs_resume.pdf" width="100%" height="800px"></iframe>
      </figure>
      <figure className="row justify-content-center">  
        <a href="./assets/vav_cs_resume.pdf" target="_blank" className="resume-link"><strong>Link:</strong> Vincent's Resume</a>
      </figure>
    </section>
    </>
  );
}

export default Resume;
