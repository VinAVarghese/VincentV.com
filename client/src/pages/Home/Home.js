import React, {useState, useEffect} from 'react';
import Hero from "../../components/Hero/hero"
import Loading from "../../components/Loading/loading"
import './home.css';

function Home() {

  const [loading, setLoading] = useState(true)

  const onLoadedData = () => {
    let timeleft = 1
      let countdown = setInterval(() => {
          if (timeleft === 0){
              setLoading(false);
              clearInterval(countdown)
          } else {
              timeleft = timeleft - 1;
          }
      }, 1000);
  }

  useEffect(() => {
    onLoadedData()
    console.log("running");
  }, [])

  return (
    <>
    <Loading display={loading}/>
    <Hero text="Full Stack Developer"/>
    <section className="container">
      <figure className="row justify-content-center">
        <div className="col-sm-4 col-xs-8">
          <img className="img-fluid" id="biopic" src="./images/desatpic.jpg" alt="profilepic"/>
        </div>
      </figure>
      <article className="bio row justify-content-sm-center">  
        <p className="col-sm-8"><span className="firstcharacter">A</span> Full Stack Developer leveraging over five years of management experience to successfully provide clients with effective and innovative products. With a full-stack development certificate from the University of Washington, I am well-learned in JavaScript, React.js, mySQL, and MongoDB, among other skills. Holding a bachelor's degree with a leadership focus, I have successfully managed communications for the non-profit Vision Rescue and have had a progressive medical management career with CityMD. 
        <br/><br/>
        At Vision Rescue, I successfully established a new on-field reporting system that helped me create regular newsletters, presentations, and web content for global distribution to current and prospective partners. In my progressive medical management experience at CityMD, I was able to not only facilitate incredible Press Ganey scores at my clinics but cultivate a loyal patient and staff base who were committed through a company transition. My experience has molded me to be inventive, understanding and end-user mindful.
        <br/><br/> 
        Ultimately, I am a contagiously joyful worker, driven by the desire to create meaningful tools and products for clients while cultivating healthy team dynamics.
        </p>
      </article>
    </section>
    </>
  );
}

export default Home;
