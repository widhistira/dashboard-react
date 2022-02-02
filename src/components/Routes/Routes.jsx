import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../configs/routesConfig';

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
