import React from 'react'
import './projectcard.css'

export default function ProjectCard(props) {
    return (
        <div className="col-sm-6">
            <div className="card portfolio-cards">
                <img src={props.imgsrc} className="card-img-top" alt={props.project}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.project}</h5>
                    <p className="card-text">{props.summary}</p>
                    <a href={props.githublink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    <a href={props.deployedlink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Deployed App</a>
                </div>
            </div>
        </div>
    )
}
