import { useState } from "react";
import "./css/search.css"


export default function Search({setCity}) {
  const [selectedCity, setSelectedCity] = useState(null);


  function aparecer() {
    const desaparece = document.querySelector("#containerNav")

    desaparece.classList.add("active")

  }
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    setCity(searchValue);
    setSearchValue('');
    setSelectedCity(null);
  };
  

  const handleCityClick = (cityName) => {
    setCity(cityName);
    setSelectedCity(cityName);
  };
  
  

  return (
    <nav className="container-nav active" id="containerNav" >
      <div className="close-div">
        <span onClick={aparecer} class="material-symbols-outlined icon-close">close</span>
      </div>
      <div className="busqueda">
        <div className="input-container">
          <span class="material-symbols-outlined buscar">search</span>
          <input onChange={handleInputChange}  value={searchValue} className="input" type="text" placeholder="search location" />
        </div>
        <button onClick={handleSearchClick}  className="btn-search" >search</button>
      </div>
      <div className="listas-container" >
        <ul>
          <div  onClick={() => handleCityClick('london')} className="liListas"><li><p className="li">London</p> {selectedCity === 'london' && <span class="material-symbols-outlined flecita">arrow_forward_ios</span>} </li></div>
          <div  onClick={() => handleCityClick('barcelona')} className="liListas"><li><p className="li">Barcelona</p> {selectedCity === 'barcelona' && <span class="material-symbols-outlined flecita">arrow_forward_ios</span>} </li> </div>
          <div  onClick={() => handleCityClick('long beach')} className="liListas"><li><p className="li">Long Beach</p> {selectedCity === 'long beach' && <span class="material-symbols-outlined flecita">arrow_forward_ios</span>} </li></div>
        </ul>
      </div>
    </nav>
  )
}


