import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import ApiError from "../ApiError/ApiError.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Елена",
    email: "pochta@yandex.ru",
  });

  const [isApiErrorOpen, setApiErrorOpen] = useState(false);

  function onLogin(email, password) {
    // call api
    setApiErrorOpen(!isApiErrorOpen);
  }

  function onRegister(email, password) {
    // call api
    setApiErrorOpen(!isApiErrorOpen);
  }

  function onUpdateProfile(name, email) {
    setApiErrorOpen(!isApiErrorOpen);
  }

  function closeApiErrorPopup() {
    setApiErrorOpen(!isApiErrorOpen);
  }

  return (
    <div className="content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header className="header" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile onUpdateProfile={onUpdateProfile} />} />
          <Route path="/signin" element={<Login onLogin={onLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={onRegister} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer className="footer" />
        <ApiError isOpen={isApiErrorOpen} onClose={closeApiErrorPopup} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
