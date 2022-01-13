import { useEffect, useState } from 'react';
import axios from 'axios';
import key from './key';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloud, faMapMarkerAlt, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

function Weather(){

    const[weather, setWeather] = useState(null);
    const[city, setCity] = useState(null);
    const[problem, setProblem] = useState(false);

    let getWeather = async (city) => {
      try{
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
          params: {
            q: city,
            appid: key,
            lang: 'pt_br',
            units: 'metric'
          }
        });
        setWeather(res.data);
        setProblem(false);
      }catch(error){
        setProblem(true);
      }
    }

    useEffect((city) => {
      if(weather !== null){
        getWeather(city);
      }
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

            {problem === true ?(
              <div className='msg-erro-container'>
                <FontAwesomeIcon className='erro-icon' size='1x' icon={faExclamationCircle}></FontAwesomeIcon>
                <p className='msg-erro'>Cidade não encontrada.</p>
              </div>
              
            ):
  
            weather !== null &&(

              <div className="clima-container">
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
            <div className='rodape'>
              <p className='rodape-texto'>&copy; Desenvolvido por <a target='_blank' href='https://github.com/Carlosmax1'>Carlos</a></p>
            </div>
        </div>
    )
}

function Pagina(){

    return <Weather/>

}

export default Pagina