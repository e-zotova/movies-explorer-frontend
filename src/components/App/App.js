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
import Popup from "../Popup/Popup.js";
import mainApi from "../../utils/MainApi.js";
import moviesApi from "../../utils/MoviesApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../../utils/ProtectedRoute.js";
import { BASE_MOVIES_URL } from "../../constants/constants.js";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const [moviesData, setMoviesData] = useState([]);
  const [preloader, setPreloader] = useState(false);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);

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

    mainApi
      .getUser()
      .then((user) => {
        setCurrentUser({ name: user.name, email: user.email });
      })
      .catch((err) => {
        setLoggedIn(false);
        setPopupMessage(err.message);
        setPopupOpen(true);
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
        setPopupMessage(err.message);
        setPopupOpen(true);
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
        setPopupMessage(err.message);
        setPopupOpen(true);
      });
  }

  function onUpdateProfile(name, email) {
    mainApi
      .setUser(name, email)
      .then((user) => {
        setCurrentUser({ name: user.name, email: user.email });
        setRequestStatus(true);
        setPopupMessage("Профиль успешно сохранен.");
        setPopupOpen(true);
      })
      .catch((err) => {
        setRequestStatus(false);
        setPopupMessage(err.message);
        setPopupOpen(true);
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
        image: `${BASE_MOVIES_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${BASE_MOVIES_URL}${movie.image.url}`,
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
    setPopupOpen(!isPopupOpen);
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
                <ProtectedRoute
                  element={Movies}
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
                <ProtectedRoute
                  element={SavedMovies}
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
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  onUpdateProfile={onUpdateProfile}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login popupMessage={popupMessage} onLogin={onLogin} />}
            />
            <Route
              path="/signup"
              element={
                <Register popupMessage={popupMessage} onRegister={onRegister} />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Popup
            requestStatus={requestStatus}
            popupMessage={popupMessage}
            isOpen={isPopupOpen}
            onClose={closeApiErrorPopup}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
