import './App.css';
import React, {useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("Mumbai")

  useEffect(() => {

    const fetchApi = async () => {
      const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7c0a553ee2acf61b87c35493b5cc7b7c&units=metric`);
      const data = await reponse.json();
      console.log(data.main);
      setCity(data.main)
    }

    fetchApi();
  }, [search])

  return (
    <div className="App">
     <div className="container">
      <div className="heading">
        [ MY WEATHER APP ]
      </div>
      <div className="input">
      <input type="search" className="search" placeholder='Search city here' 
      onChange={(e)=>{
        setSearch(e.target.value);
      }} 
      value={search}   
      />
      </div>
      <div>
      <h2 className="cityName">
        <i className="fa-solid fa-map-pin"></i>
        {search}</h2>
      </div>
      {
        !city ? <><div className="error">No data found !!</div>
        <img src="https://previews.123rf.com/images/arcady31/arcady311705/arcady31170500009/77165345-oops-vector-banner-with-emoji.jpg" alt="" />
        </>
        :<div className="info">
        <h1 className="temp">{city.temp} °C</h1>
        <br></br>
        <h3 className="minmax">
          Pressure : {city.pressure} <br></br>
          Humidity : {city.humidity} <br></br>
          Sea Level : {city.sea_level}
        </h3>
      </div>
      }
     </div>
    </div>
  );
}

export default App;
