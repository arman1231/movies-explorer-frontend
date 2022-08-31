import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...props }) {
  if (props.isLoggedIn === null) {
    return null;
  }
  return (
    <Route>
      {
        () =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  )
}
