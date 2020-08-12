import React from 'react'
import HeroSm from '../../components/HeroSm/herosm'
import ProjectCard from '../../components/ProjectCard/projectcard'
import Watermark from '../../components/Watermark/watermark'
import './portfolio.css'

export default function Portfolio() {
    return (
        <>
        <HeroSm header="Portfolio"/>
        <div className="buffer"></div>
        <div className="row justify-content-center row-margin">
            <ProjectCard imgsrc='./images/mixme.png' project="MixMe" summary="An app for the everyday and aspiring mixologist. Using JavaScript and API consumption, my team created an app that helps user search, make, and even find unique mixed drinks locally!" githublink="https://github.com/VinAVarghese/ProjectMixMe" deployedlink="https://vinavarghese.github.io/ProjectMixMe/" />
            <ProjectCard imgsrc='./images/spontaneouslynow.png' project="Spontaneously Now" summary="This end-to-end app is for the spontaneous-adventurer. Powered by four apis, the app offers a random activity to do when the user is looking for something fun to do! It also doubles as a journal/planner." githublink="https://github.com/VinAVarghese/ProjectArbiter" deployedlink="https://spontaneouslynow.herokuapp.com/" />
            <ProjectCard imgsrc='./images/burgerquest.png' project="Burger Quest" summary="A fun bugger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM all hosted on Heroku. The application takes in form inputs to log burger names into the database and then generates a beautiful html with the information." githublink="https://github.com/VinAVarghese/BurgerQuest" deployedlink="https://burgerquest-app.herokuapp.com/" />
            <ProjectCard imgsrc='./images/workdayplan.png' project="Work Day Scheduler" summary="This is a simple app for the on-the-go user looking to stay organized and on top of appointments. Using Javascript, moment.js, and local storage, the app saves notes and color codes the hours of the day. Never lose track of another appointment again!" githublink="https://github.com/VinAVarghese/Work-Day-Scheduler" deployedlink="https://vinavarghese.github.io/ProjectMixMe/" />
            <ProjectCard imgsrc='./images/passwordgen.png' project="Password Generator" summary="A simple password generator that uses JavaScript prompts to recieve user input on password preferences, building out a random password of the desired length." githublink="https://github.com/VinAVarghese/Password-Generator" deployedlink="https://vinavarghese.github.io/Password-Generator/" />
            <ProjectCard imgsrc='./images/jsquiz.png' project="JavaScript Quiz" summary="This is a timed quiz built with JavaScript, created to practice event listening and DOM manipulation. The subject matter is JavaScript and it is out of this world." githublink="https://github.com/VinAVarghese/Code-Quiz" deployedlink="https://vinavarghese.github.io/Code-Quiz/" />
        </div>
        <Watermark />
        </>
    )
}
