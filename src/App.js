import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Styles */
import './App.css';

/* Pages */
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shoppage.component';

import Header from '../src/components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;