import React, {useState, useEffect} from 'react'
import "./modal.css"

export default function Modal(props) {

    const [modalVisible, setModalVisible] = useState(true)

    useEffect(() => {
        setModalVisible(!modalVisible)
    }, [props.visible])

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }    

    return (
        <div className={modalVisible?"on":"off"}>
            <div className="black-filter">
                <button className="click-off" onClick={toggleModal}></button>
                <div className="modal-div">

                </div>    
            </div> 
        </div> 
    )
}
