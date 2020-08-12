import React from 'react'
import './herosm.css'

export default function HeroSm(props) {
    return (
        <>
        <header className="pageheader">
            <h1>{props.header}</h1>
        </header>
        <div className="buffer"></div>
        </>
    )
}
