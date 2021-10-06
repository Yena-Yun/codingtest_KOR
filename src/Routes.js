import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import BeerList from './Pages/BeerList';
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/beerlist' component={BeerList} />
    </Switch>
  );
};

export default Routes;
