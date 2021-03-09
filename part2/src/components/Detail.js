import axios from "axios";
import { useEffect, useState } from "react";
import Format from "string-format";
import Weather from "./Weather";

const Detail = ({ country }) => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    let url = Format(
      "http://api.weatherstack.com/current?access_key={0}&query={1}",
      process.env.REACT_APP_API_KEY,
      country.capital
    );
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        setWeather('');
      });
  }, [country.capital]);

  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>spoken languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img alt="" src={country.flag} style={{ width: 200, height: 200 }} />
      <h2>Weather in {country.capital}</h2>
      <Weather weather={weather}/>
    </>
  );
};

export default Detail;
