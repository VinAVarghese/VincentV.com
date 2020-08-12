import React from 'react';
import Hero from "../../components/Hero/hero"
import './home.css';

function Home() {
  return (
    <>
    <Hero text="Full Stack Developer"/>
    <section className="container">
      <figure className="row justify-content-center">
        <div className="col-sm-4 col-xs-8">
          <img className="img-fluid" id="biopic" src="./images/desatpic.jpg" alt="profilepic"/>
        </div>
      </figure>
      <article className="bio row justify-content-sm-center">  
        <p className="col-sm-8"><span className="firstcharacter">A</span> Full Stack Developer leveraging over five years of management experience to successfully provide clients with effective and innovative products. With a full-stack development certificate from the University of Washington, I am well-learned in skills such as HTML, CSS, JavaScript, and React.js. Holding a bachelor's degree with a leadership focus, I have successfully managed communications for the non-profit Vision Rescue and have had a progressive medical management career with CityMD. 
        <br/><br/>
        At Vision Rescue, I successfully established a new on-field reporting system that helped me create regular newsletters, presentations, and web content for global distribution to current and prospective partners. In my progressive medical management experience at CityMD, I was able to not only facilitate incredible Press Ganey scores at my clinics but cultivate a loyal patient and staff base who were committed through a company transition.
        <br/><br/> 
        Ultimately, I am a contagiously joyful worker, driven by the desire to create meaningful tools and products for clients while cultivating healthy team dynamics.
        </p>
      </article>
    </section>
    </>
  );
}

export default Home;