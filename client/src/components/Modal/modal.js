import React, {useState, useEffect} from 'react'
import "./modal.css"

export default function Modal(props) {

    const [modalVisible, setModalVisible] = useState(true)

    useEffect(() => {
        setModalVisible(modalVisible => !modalVisible)
    }, [props.visible])

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }    

    return (
        <div className="on">
        {/* {modalVisible?"on":"off"}> */}
            <button className="click-off" onClick={toggleModal}>
                <div className="modal-div">
                    <div className="x">X</div>
                    <div className="container align-items-center content-div-height">
                        <div className="row justify-content-center">
                            <h1>The ArrowPeaks</h1>
                            <img className="m-logo" src="./images/logothumbnail.png" alt="logo-r"/>  
                            <h4>A logo I created for myself and my portfolio. The image is reminiscent of mountain peaks both upright and upended or, arrows pointing here and to. <br/> <br/> I love the idea of working together to reach new heights, collaborating to challenge the norm, and developing to bring upon change. <br/><br/> The ArrowPeaks represent team work that subverts what was thought possible and looks at challenges as opportunities.</h4> 
                        </div>
                    </div>
                </div>
            </button>
        </div> 
    )
}
