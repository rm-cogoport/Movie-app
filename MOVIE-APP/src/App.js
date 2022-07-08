import React, { useState, useEffect } from "react";
import MovieList from "./Component/MovieList";
import SearchList from "./Component/SearchList";
import RemoveFavourite from "./Component/RemoveFavourite";
import MovieInfo from './Component/MovieInfo'
import AddFav from "./Component/AddFav";
import "./App.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [searchMovie, setSearch] = useState("");

  const [myMovies, setMovies] = useState([]);
 
  const [favoiriteMovie, setFavouriteMovie] = useState([]);

  const getData = async (searchStr) => {
    let url = `http://www.omdbapi.com/?s=${searchStr}&apikey=f745deeb`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  
  useEffect(() => {
    const myFavouriteList = JSON.parse(localStorage.getItem("MyJson"));
    if (myFavouriteList) {
      setFavouriteMovie(myFavouriteList);
    }
  }, []);

  const AddFavMovie = (movie) => {
    if (favoiriteMovie.indexOf(movie) === -1) {
      const myFavMovies = [...favoiriteMovie, movie];
      console.log(myFavMovies);
      setFavouriteMovie(myFavMovies);
      localStorage.setItem("MyJson", JSON.stringify(favoiriteMovie));
    }
  };
  const removeFav = (movie) => {
    let myFavMov = favoiriteMovie.filter((favs) => {
      return favs.imdbID !== movie.imdbID;
    });
    setFavouriteMovie(myFavMov);
    localStorage.setItem("MyJson", JSON.stringify(favoiriteMovie));
  };
  useEffect(() => {
    getData(searchMovie);
  }, [searchMovie]);
  return (
    <>
      <Router>
        <SearchList
          setSearch={setSearch}
          setMovies={searchMovie}
          getData={getData}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <MovieList
                    myMovies={myMovies}
                    onClickComponents={AddFavMovie}
                    FavComp={AddFav}
                  />
                  <div className="fav">
                    <h1 className="Edit-fav">Favourites</h1>
                    <MovieList
                      myMovies={favoiriteMovie}
                      onClickComponents={removeFav}
                      FavComp={RemoveFavourite}
                    />
                  </div>
                </>
              );
            }}
          ></Route>
          
          <Route exact path="/movie/:id" render={() => <MovieInfo  />} >
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
