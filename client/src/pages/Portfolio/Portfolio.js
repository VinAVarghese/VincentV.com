import React, {useEffect, useState} from 'react'
import Hero from '../../components/Hero/hero'
import Loading from "../../components/Loading/loading"
import ProjectCard from '../../components/ProjectCard/projectcard'
import Watermark from '../../components/Watermark/watermark'
import './portfolio.css'

export default function Portfolio() {

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
      }, 500);
  }

  useEffect(() => {
    onLoadedData()
    console.log("running");
  }, [ProjectCard])

    return (
        <>
        <Loading display={loading}/>
        <Hero text="Portfolio"/>
        <div className="buffer"></div>
        <div className="row justify-content-center row-margin">
            <ProjectCard imgsrc='./images/planit.png' project="PLANiT" summary="PLANiT uses a React.js front end, along with MongoDB to create a robust, full MERN application that serves as a collaborative travel planning platform. Users create planning boards where an unlimited amount of invited guests suggest and vote on trip plans." githublink="https://github.com/zackdeacon/planit-frontend" deployedlink="https://travelplanit.herokuapp.com/" />
            <ProjectCard imgsrc='./images/mixme.png' project="MixMe" summary="An app for the everyday and aspiring mixologist. Using JavaScript and API consumption, my team created an app that helps users search, make, and even find unique mixed drinks locally! A beta version of a quiz game to encouraging learning is also included in this version." githublink="https://github.com/VinAVarghese/ProjectMixMe" deployedlink="https://vinavarghese.github.io/ProjectMixMe/" />
            <ProjectCard imgsrc='./images/spontaneouslynow.png' project="Spontaneously Now" summary="This end-to-end app is for the spontaneous-adventurer. Powered by four third party APIs, the app offers a random activity to do when the user is looking for something fun to do! It also doubles as a journal/planner." githublink="https://github.com/VinAVarghese/ProjectArbiter" deployedlink="https://spontaneouslynow.herokuapp.com/" />
            <ProjectCard imgsrc='./images/workdayplan.png' project="Work Day Scheduler" summary="This is a simple app for the on-the-go user looking to stay organized and on top of appointments. Using Javascript, moment.js, and local storage, the app saves notes and color codes the hours of the day." githublink="https://github.com/VinAVarghese/Work-Day-Scheduler" deployedlink="https://vinavarghese.github.io/ProjectMixMe/" />
            <ProjectCard imgsrc='./images/burgerquest.png' project="Burger Quest" summary="A fun bugger logger that uses MySQL, Node, Express, Handlebars and an ORM all hosted on Heroku. The application takes in form inputs to log info. into the database and then generates a beautiful html with the info." githublink="https://github.com/VinAVarghese/BurgerQuest" deployedlink="https://burgerquest-app.herokuapp.com/" />
            <ProjectCard imgsrc='./images/passwordgen.png' project="Password Generator" summary="A simple password generator that uses JavaScript prompts to recieve user input on password preferences, building out a random password of the desired length." githublink="https://github.com/VinAVarghese/Password-Generator" deployedlink="https://vinavarghese.github.io/Password-Generator/" />
        </div>
        <Watermark />
        </>
    )
}
