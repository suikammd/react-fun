const Weather = ({ weather }) => {
  if (weather === "") {
    return <p></p>;
  }

  return (
    <>
      <p>
        <b>temperature:</b> {weather.current.temperature} Celcius
      </p>
      <img
        alt=""
        src={weather.current.weather_icons[0]}
        style={{ width: 100, height: 100 }}
      />
      <p>
        <b>wind:</b> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}
      </p>
    </>
  );
};

export default Weather;
