import React from 'react';
import { Route, Switch } from 'react-router-dom'; // Import Switch from named exports

import Home from '../pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route path='/fit' exact component={Home}/>
    </Switch>
  );
}

export default Routes;