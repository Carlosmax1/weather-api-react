import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const MessageError = () => {
    return (
        <div className='msg-erro-container'>
            <FontAwesomeIcon className='erro-icon' size='1x' icon={faExclamationCircle}></FontAwesomeIcon>
            <p className='msg-erro'>Cidade não encontrada.</p>
        </div>
    )
}

export default MessageError