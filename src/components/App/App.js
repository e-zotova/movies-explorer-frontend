import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import ApiError from "../ApiError/ApiError.js";
import mainApi from "../../utils/MainApi.js";
import moviesApi from "../../utils/MoviesApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Елена",
    email: "pochta@yandex.ru",
  });

  const [moviesData, setMoviesData] = useState([]);
  const [preloader, setPreloader] = useState(false);

  const [isApiErrorOpen, setApiErrorOpen] = useState(false);

  function onLogin(email, password) {
    // call api
    setApiErrorOpen(!isApiErrorOpen);
  }

  function onRegister(email, password) {
    // call api
    setApiErrorOpen(!isApiErrorOpen);
  }

  function onGetMovies() {
    setPreloader(true);
    moviesApi
      .getMovies()
      .then((cards) => {
        setMoviesData(cards);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setPreloader(false);
      });
  }

  function onMovieSave() {
    //
  }

  function onMovieRemove() {}

  function onUpdateProfile(name, email) {
    setApiErrorOpen(!isApiErrorOpen);
  }

  function closeApiErrorPopup() {
    setApiErrorOpen(!isApiErrorOpen);
  }

  return (
    <div className="page">
      <div className="content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <Movies
                  preloader={preloader}
                  moviesList={moviesData}
                  onGetMovies={onGetMovies}
                  onMovieSave={onMovieSave}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  preloader={preloader}
                  moviesList={moviesData}
                  onGetMovies={onGetMovies}
                  onMovieRemove={onMovieRemove}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile onUpdateProfile={onUpdateProfile} />}
            />
            <Route path="/signin" element={<Login onLogin={onLogin} />} />
            <Route
              path="/signup"
              element={<Register onRegister={onRegister} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ApiError isOpen={isApiErrorOpen} onClose={closeApiErrorPopup} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
