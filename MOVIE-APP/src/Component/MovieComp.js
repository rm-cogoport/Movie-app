import React from 'react'
import "../App.css";
import {Link } from "react-router-dom"

const MovieComp = (props) => {
  return (
    <>
    <div className='MyMovieLists'>
        <div className='inDiv'>
          <Link to={`/movie/${props.movie.imdbID}`}>
          <img
            src={(props.movie.Poster !== 'N/A' ? props.movie.Poster : `https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg`)}
            alt=""
          />
          </Link>
          
          <h1>{props.movie.Title}</h1>
             <span className="typeDiv">
                <div className="type">
                   <span>Year : {props.movie.Year}</span>
                   <span className='text'>Type: {props.movie.Type}</span>
                </div>
                <div className='addF' onClick = {()=> props.onClickComponents(props.movie)}> < props.FavComp /> </div>
                
             </span>
        </div>
      </div>
      </>
  )
}

export default MovieComp
