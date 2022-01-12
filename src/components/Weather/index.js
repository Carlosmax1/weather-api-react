import { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

function Weather(){

    const[weather, setWeather] = useState(null);
    const[city, setCity] = useState('Sao Paulo');
    
    var token = 'b43db65d8e7c80bd14ce935a18e8502f';

    let getWeather = async (city) => {
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?`, {
          params: {
            q: city,
            appid: token,
            lang: 'pt_br',
            units: 'metric'
          }
        });
        setWeather(res.data);
      }

      useEffect(() => {
          getWeather(city);
      }, []);
      
    return(
        <div className='box'>
            <div className='titulo-principal'>
                <FontAwesomeIcon icon={faCloud} size='2x' className='cloudIcon'/>
                <h1 className='titulo'>Weather App</h1>
            </div>

            <div className='input-dados'>
              <input type="text" className='input' onChange={(e) => setCity(e.target.value)} placeholder="Digite o nome da sua cidade"/>
              <button className='botao' onClick={() => getWeather(city)}>Pesquisar</button>
            </div>
            {weather !== null &&(
              <div class="clima-container">
                <h2 className='titulo-clima'>Clima atual</h2>
                <div className='img-clima-container'>
                  <img className='img-clima' src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="imgicon"/>
                </div>
                <h3 className='clima-descricao'>{weather.weather[0].description}</h3>
                <div className='temperatura-container'>
                    <h3 className='temperatura'>{parseInt(weather.main.temp)}°C</h3>
                </div>
                <div className='local'>
                  <FontAwesomeIcon className='local-icone' icon={faMapMarkerAlt}>
                  </FontAwesomeIcon>
                  <p className='local-texto'>{weather.name} | {weather.sys.country}</p>
                </div>
                <div className='maximo-minimo-umidade'>
                  <p className='maximo-minmo-umidade-texto'>Max: {parseInt(weather.main.temp_max)} || Min: {parseInt(weather.main.temp_min)} || Umidade: {weather.main.humidity}%</p>
                </div>
              </div>
            )}
            {console.log(weather)}
        </div>
    )
}

function Pageweather(){
    return <Weather/>
  }

export default Pageweather