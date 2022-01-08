import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'; 

function Modal(props) {

    useEffect(() => {
        setTimeout(() => {
            $('.modal-item').addClass('active')
        }, [])
    }, [])

    
    return ReactDOM.createPortal (
        <div className='full-screen-img' onClick={props.closeModal}>
            <div className='modal-item'>
                {props.children}
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default Modal
