"use client";
import './globals.css'
import Vista from "../../components/vista";
import Cards from '../../components/cards';
import MiniCards from '../../components/miniCards';
import Search from '../../components/search';
import Link from 'next/link';
import { useEffect, useState } from "react"

export default function Home() {
  const KEY = "015377a0be139009cc8b4ded78d23a1b";
  const [city, setCity] = useState('london');
  const [datos, setDatos] = useState();

  useEffect(() => {
    const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      if (data.cod === '404') {
        alert(data.message);
      } else {
        setDatos(data);
      }
    })
  }, [city]);

  const updateMyLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
      const data = await response.json();
      setCity(data.locality);
    });
  };

  return (

    <main className='principal'>
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <Search datos={datos} setCity={setCity} />
      <Vista datos={datos} updateMyLocation={updateMyLocation} />
      
      <div className='cards-div'>
      <MiniCards />
      <Cards datos={datos}/>
      <footer>
        <div className='div-footer'>
          <p className='p1'>created by</p>
          <h3>jarvinc3</h3>
          <p className='p2'> - devChallenges.io</p>
        </div>
      </footer>
      </div>
      
    </main>
  )
} 
