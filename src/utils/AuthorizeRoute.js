import React from 'react';
import { Navigate } from "react-router-dom";

function AuthorizeRoute ({ element: Component, ...props }) {
  return (
    localStorage.getItem("isUserSignedIn") ? <Navigate to="/" replace/> : <Component {...props} />
  )
}

export default AuthorizeRoute;