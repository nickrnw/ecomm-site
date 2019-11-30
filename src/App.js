import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Styles */
import './App.css';

/* Pages */
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import Header from '../src/components/header/header.component';

function App() {
  return (
    <div className='content-app'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;