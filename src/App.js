/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
// eslint-disable-next-line import/no-named-as-default
import ShopPage from './Pages/ShopPage/ShopPage';
import SingInAndSingUpPage from './Pages/Singin-and-singup-page/SingIn-and-Singup-Page';
import Header from './Component/Header/Header';
import './App.style.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/singin" component={SingInAndSingUpPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
