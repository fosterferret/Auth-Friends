import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const path = (({path}) => ({ path }))({...rest});
  // console.log(path)
  // console.log({...rest})

  const { path } = { ...rest };
  console.log(path);
  return (
    <Route
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

//1,20 2, 10, 4,5 
