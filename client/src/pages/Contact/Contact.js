import React from 'react'
import HeroSm from '../../components/HeroSm/herosm'
import EmailForm from '../../components/EmailForm/emailform'
import Watermark from '../../components/Watermark/watermark'
import './contact.css'

export default function Contact() {
    return (
        <>
        <HeroSm header="Contact"/>

        <section className="row justify-content-center">
            <section className="col-8 thankyou">
                <h2>Thank You</h2>
                <p>Thank you for visiting my site today. <br/> I'd love for you to get in touch, feel free to send me an email below. <br/> You can also find links to my social pages, please connect! <br/> Have a great day and here's to creating something meaningful!</p>
                <a href="https://www.linkedin.com/in/vincent-varghese-49009b1a8/">
                    <img className="sm-logos" src="./images/linkedinlogo.png" alt="linkedinlogo" target="_blank"/>
                </a>
                <a href="https://github.com/VinAVarghese">
                    <img className="sm-logos" src="./images/github.png" alt="githublogo" target="_blank"/>
                </a>
            </section>
        </section>
        <EmailForm />        
        <Watermark />
        </>
    )
}
