import './App.css';
import axios from 'axios';
import {useEffect ,useState} from 'react'
import InputSearch from './Component/InputSearch/InputSearch';
import Weather from './Component/Weather/Weather';
import { clear } from '@testing-library/user-event/dist/clear';


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city , setCity] = useState('');
  const [validCity , setValidCity] = useState(false)


  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.toLowerCase()}&APPID=6557810176c36fac5f0db536711a6c52`
      )
      .then((response) => {
        setWeatherData(response.data);
        setValidCity(true)
        console.log(response.data);
      })
      .catch((error) => {
        setValidCity(false)
      });
  }, [city]);
  console.clear();

  return (
    <div className="App">
       {!validCity && (<h2>Please enter a valid city name...</h2>)  }
       <InputSearch  city={city} setCity={setCity}/>
       {validCity && (<Weather weatherData={weatherData} city={city} />)}
    </div>
  );
}

export default App;


