import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import Cookies from 'js-cookie';

interface PrivateRouteProps extends Omit<RouteProps, 'location'> {
  location?: Location;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ location, ...rest }) => {
  const authData = Cookies.get('authentication');
  let auth: any;

  if (authData) auth = JSON.parse(authData);
  return auth?.isLogged ? (
    { ...(rest.element as React.ReactElement) }
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
