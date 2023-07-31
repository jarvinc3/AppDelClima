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
  const city = "london";
  const [datos, setDatos] = useState();

  useEffect(() => {
      const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
      Promise.all([promesa]).then(async (values) => {
          const data = await values[0].json();
          setDatos(data);
      })
  }, []); 


  return (

    <main className='principal'>
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <Search />
      <Vista />
      
      <div className='cards-div'>
      <MiniCards />
      <Cards />
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
