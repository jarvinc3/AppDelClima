import "./css/search.css"

export default function Search() {
  return (
    <nav className='container-nav ' id="active">
      <div className="close-div">
        <span class="material-symbols-outlined icon-close">close</span>
      </div>
      <div className="busqueda">
        <input className="input" type="text" placeholder="search location"/>
        <button className="btn-search" >search</button>
      </div>
      <div className="listas-container" >
        <ul>
          <li>London</li>
          <li>Barcelona</li>
          <li>Long Beach</li>
        </ul>
      </div>
    </nav>
  )
}

