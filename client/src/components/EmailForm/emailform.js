import React, {useState} from 'react';
import './emailform.css';

export default function EmailForm() {
    const [formObject, setFormObject] = useState({
        email: "",
        subject: "",
        message: ""
    })

    const [emailTitle, setEmailTitle] = useState({
        title:"Email Me",
        red:""
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
      };

    const handleSubmit = e => {
        e.preventDefault();
        if(formObject.email === "" || formObject.subject === "" || formObject.message === ""){
            setEmailTitle({
                title: "Please fill in all fields",
                red:"red"
            }) 
        } else {
            setEmailTitle({
                title: "Email Sent!",
                red:""
            })
            setFormObject({ ...formObject, 
                email: "",
                subject: "",
                message: ""
            })
        }
    }

    return (
        <section className="row justify-content-center">
            <h2 className="email-form-title text-center col-sm-8" id={emailTitle.red}>{emailTitle.title}</h2>
            <form onSubmit={handleSubmit} className="formstyle col-sm-8">
                <div className="form-group">
                    <label>Your Email Address</label>
                    <input 
                    name="email"
                    onChange={handleInputChange}
                    value={formObject.email}
                    type="email" 
                    className="form-control text-area" 
                    placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <textarea 
                    name="subject"
                    onChange={handleInputChange}
                    value={formObject.subject}
                    className="form-control text-area" 
                    rows="1"></textarea>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                    name="message"
                    onChange={handleInputChange} 
                    value={formObject.message}
                    className="form-control text-area" 
                    rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </section>
    )
}
