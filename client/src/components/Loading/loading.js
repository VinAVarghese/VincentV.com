import React, {useState, useEffect} from 'react'
import './loading.css'

export default function Loading(props) {

    const [className, setClassName] = useState("loading-div")

    const displayNone = () => {
        if (props.display === true) {
            console.log("waiting");
        }else {
            let timeleft = 1
            let countdown = setInterval(() => {
                if (timeleft === 0){
                    setClassName("disappear");
                    clearInterval(countdown);
                    console.log("complete")
                } else {
                    timeleft = timeleft - 1;
                    console.log("running");
                }
            }, 250);
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
