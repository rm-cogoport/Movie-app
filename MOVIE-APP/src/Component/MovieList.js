import React from "react";
import MovieComp from "./MovieComp";
import "../App.css";

const MovieList = (props) => {
  return (
    <>
    <div className="container my-3 my-container">
        {props.myMovies.lnegth!==0? props.myMovies.map((movie,index) =>{
             return(
                <MovieComp onClick = {()=>props.onMovieSelect(movie.imdbID)} key = {index} movie = {movie} onClickComponents = {props.onClickComponents} FavComp ={props.FavComp}/>
             )
        }):"No items here"}
    </div>
    </>
  );
};

export default MovieList;
