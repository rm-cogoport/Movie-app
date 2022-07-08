import React from "react";
import "../App.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const params = useParams();
  const [movienfo, setMovieInfo] = useState();
  useEffect(() => {
    const getMovie = async () => {
      let url = `http://www.omdbapi.com/?i=${params.id}&apikey=f745deeb`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovieInfo(responseJson);
    };
    getMovie();
  }, [movienfo]);
  return (
    <>
      <div className="test">
        {movienfo && (
          <>
            <div className="Movnfo">
              <img src={movienfo.Poster} alt="" />
              <div className="details">
                <h1><span className="my-span">Movie:</span> {movienfo.Title}</h1>
                <p><span className="my-span">Year:</span>  {movienfo.Year}</p>
                <p><span className="my-span">Language:</span>  {movienfo.Language}</p>
                <p><span className="my-span">Rated:</span>  {movienfo.Rated}</p>
                <p><span className="my-span">Released:</span> {movienfo.Released}</p>
                <p><span className="my-span">Runtime:</span>  {movienfo.Runtime}</p>
                <p><span className="my-span">Genre:</span>  {movienfo.Genre}</p>
                <p><span className="my-span">Director:</span>  {movienfo.Director}</p>
                <p><span className="my-span">Actors:</span>  {movienfo.Actors}</p>
                <p><span className="my-span">Plot:</span>  {movienfo.Plot}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieInfo;
