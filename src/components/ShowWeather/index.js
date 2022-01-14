import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ShowWeather = (props) => {
    return (
        <div className="clima-container">
            <h2 className='titulo-clima'>Clima atual</h2>
            <div className='img-clima-container'>
                <img className='img-clima' src={`http://openweathermap.org/img/w/${props.props.weather[0].icon}.png`} alt="imgicon" />
            </div>

            <h3 className='clima-descricao'>{props.props.weather[0].description}</h3>

            <div className='temperatura-container'>
                <h3 className='temperatura'>{parseInt(props.props.main.temp)}°C</h3>
            </div>

            <div className='local'>
                <FontAwesomeIcon className='local-icone' icon={faMapMarkerAlt}>
                </FontAwesomeIcon>
                <p className='local-texto'>{props.props.name} | {props.props.sys.country}</p>
            </div>

            <div className='maximo-minimo-umidade'>
                <p className='maximo-minmo-umidade-texto'>Max: {parseInt(props.props.main.temp_max)} || Min: {parseInt(props.props.main.temp_min)} || Umidade: {props.props.main.humidity}%</p>
            </div>
        </div>
    )
}

export default ShowWeather