import React, {useState, useEffect} from 'react'
import Hero from '../../components/Hero/hero'
// import EmailForm from '../../components/EmailForm/emailform'
import Watermark from '../../components/Watermark/watermark'
import Loading from "../../components/Loading/loading"
import './contact.css'

export default function Contact() {
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
    }, [])

    return (
        <>
        <Loading display={loading}/>
        <Hero text="Contact"/>
        <section className="thankyou">
            <h2>Thank You</h2>
            <p>Thank you for visiting my site today. <br/> I'd love for you to get in touch, feel free to send me an email. <br/> You can also find links to my social pages, please connect! <br/> Have a great day and here's to creating something meaningful!</p>
            <a className="email-link" href = "mailto:VinAVarghese@gmail.com"><strong>VinAVarghese@gmail.com</strong></a>
            <br/>
            <br/>
            <a href="https://www.linkedin.com/in/vincent-varghese-49009b1a8/">
                <img className="sm-logos" src="./images/linkedinlogo.png" alt="linkedinlogo" target="_blank"/>
            </a>
            <a href="https://github.com/VinAVarghese">
                <img className="sm-logos" src="./images/github.png" alt="githublogo" target="_blank"/>
            </a>
        </section>
        {/* <EmailForm /> */}
        <Watermark />
        </>
    )
}
