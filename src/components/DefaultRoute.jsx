import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOCAL_STORAGE_SERVICE } from "../utils";

export const DefaultRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>{
     return( LOCAL_STORAGE_SERVICE._getAccessTokenFromSession("_access_token") ? (
        <Redirect
          to={{ pathname: "/webapp/verify", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      ));
    }
  }
  />
);
