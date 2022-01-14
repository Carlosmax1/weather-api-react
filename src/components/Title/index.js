import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import './index.css'

const Title = () =>{
    return(
        <div className='titulo-principal'>
            <FontAwesomeIcon icon={faCloud} size='2x' className='cloudIcon'/>
            <h1 className='titulo-texto'>Weather App</h1>
        </div>
    )

}

export default Title