import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-andsign-up/sign-in-andsign-up.component' 
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
        <Switch>
            {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
