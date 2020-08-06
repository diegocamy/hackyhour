import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  if (!user) return <Redirect to="/login" />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
