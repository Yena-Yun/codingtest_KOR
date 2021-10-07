import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import BeerList from './Pages/BeerList';
import Cart from './Pages/Cart';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/beerlist' component={BeerList} />
      <Route path='/cart' component={Cart} />
    </Switch>
  );
};

export default Routes;
