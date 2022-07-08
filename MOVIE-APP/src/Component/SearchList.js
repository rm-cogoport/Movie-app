import React from 'react'
import '../App.css';

const SearchList = ({searchMovie, setSearch}) => {
  return (
    <div>
      <nav className="navbar">
            <h1>myMovies</h1>
            <div className="forms">
              <input type="text"  value = {searchMovie} name="title" id="title" onChange={(e)=>setSearch(e.target.value)} placeholder="Search Here"/>
              
           </div>
      </nav>
   </div>
  )
}

export default SearchList
