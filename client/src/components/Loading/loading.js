import React from 'react'
import './loading.css'

export default function Loading(props) {
    return (
        <div className="loading-div" style={{ opacity: props.display ? 1 : 0}}>
            <img className="loading-logo" src="./images/logothumbnail.png" alt="logo"/>
        </div>
    )
}
