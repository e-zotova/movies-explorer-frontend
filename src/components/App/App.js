import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { baseMoviesUrl } from "../../constants/constants.js";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const [moviesData, setMoviesData] = useState([]);
  const [preloader, setPreloader] = useState(false);

  const [isApiErrorOpen, setApiErrorOpen] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const tokenCheck = () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        handleLogin();
      }
    };
    tokenCheck();
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    mainApi.getUser().then((user) => {
      setCurrentUser({ name: user.name, email: user.email });
    });
  };

  function onLogin(email, password) {
    mainApi
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        handleLogin();
        navigate("/movies");
      })
      .catch((err) => {
        setLoggedIn(false);
        setApiError(err);
      });
  }

  function onRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(() => {
        onLogin(email, password);
      })
      .catch((err) => {
        setLoggedIn(false);
        setApiError(err);
      });
  }

  function onUpdateProfile(name, email) {
    mainApi.setUser(name, email).then((user) => {
      setCurrentUser({ name: user.name, email: user.email });
    });
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

  function onMovieSave(movie) {
    mainApi
      .saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${baseMoviesUrl}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${baseMoviesUrl}${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((savedMovie) => {
        console.log(savedMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onMovieRemove(id) {
    mainApi
      .unsaveMovie(id)
      .then((unsavedMovie) => {
        console.log(unsavedMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeApiErrorPopup() {
    setApiErrorOpen(!isApiErrorOpen);
  }

  return (
    <div className="page">
      <div className="content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <Movies
                  loggedIn={loggedIn}
                  preloader={preloader}
                  moviesList={moviesData}
                  onGetMovies={onGetMovies}
                  onMovieSave={onMovieSave}
                  onMovieRemove={onMovieRemove}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  loggedIn={loggedIn}
                  preloader={preloader}
                  moviesList={moviesData}
                  onGetMovies={onGetMovies}
                  onMovieRemove={onMovieRemove}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  loggedIn={loggedIn}
                  onUpdateProfile={onUpdateProfile}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login apiError={apiError} onLogin={onLogin} />}
            />
            <Route
              path="/signup"
              element={
                <Register apiError={apiError} onRegister={onRegister} />
              }
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
