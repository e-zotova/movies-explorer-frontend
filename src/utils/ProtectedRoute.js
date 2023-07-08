import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ element: Component, ...props }) {
  return (
    localStorage.getItem("isUserSignedIn") ? <Component {...props} /> : <Navigate to="/" replace/>
  )
}

export default ProtectedRoute;