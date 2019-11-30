import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Styles */
import './App.css';

/* Pages */
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;