import React, {useState, useEffect} from 'react'
import './loading.css'

export default function Loading(props) {

    const [className, setClassName] = useState("loading-div")

    const displayNone = () => {
        if (props.display === true) {
        }else {
            let timeleft = 1
            let countdown = setInterval(() => {
                if (timeleft === 0){
                    setClassName("disappear");
                    clearInterval(countdown);
                } else {
                    timeleft = timeleft - 1;
                }
            }, 500);
        }
    }

    useEffect(() => {
        displayNone()
    }, [props.display])

    return (
        <div className={className} style={{ opacity: props.display ? 1 : 0}}>
            <img className="loading-logo" src="./images/logothumbnail.png" alt="logo"/>
        </div>
    )
}
