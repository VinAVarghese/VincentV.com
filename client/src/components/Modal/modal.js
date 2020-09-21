import React, {useState, useEffect} from 'react'
import "./modal.css"

export default function Modal(props) {

    const [modalClass, setModalClass] = useState()

    useEffect(() => {
        if (props.visible === true) {
            setModalClass("on")
        } else {
            setModalClass("off")
        }
    }, [])
    

    return (
        <div className={modalClass}>
            <div className="black-filter">
                <button className="click-off" onClick=""></button>
                <div className="modal-div">

                </div>    
            </div> 
        </div> 
    )
}
