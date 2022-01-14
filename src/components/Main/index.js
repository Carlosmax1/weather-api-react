import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Title from '../Title';
import Footer from '../Footer';
import MessageError from '../MessageError';
import ShowWeather from '../ShowWeather';

function Weather() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [problem, setProblem] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  let getWeather = async (city) => {
    try {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
        params: {
          q: city,
          appid: API_KEY,
          lang: 'pt_br',
          units: 'metric'
        }
      });
      setWeather(res.data);
      setProblem(false);
    } catch (error) {
      setProblem(true);
    }
  }

  useEffect((city) => {
    if (weather !== null) {
      getWeather(city);
    }
  }, []);

  return (

    <div className='box'>

      <Title />

      <div className='input-dados'>
        <input type="text" className='input' onChange={(e) => setCity(e.target.value)} placeholder="Digite o nome da sua cidade" />
        <button className='botao' onClick={() => getWeather(city)}>Pesquisar</button>
      </div>

      {problem === true ? (
        <MessageError />
      ) :
        weather !== null && (
          <ShowWeather props={weather} />
        )}
      <Footer />
    </div>
  )
}

function Page() {
  return <Weather />
}

export default Page