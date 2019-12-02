import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux' // a component that we get from react-redux store, the provider componnet has to be the parent of everything
import { PersistGate } from 'redux-persist/integration/react';
// BrowserRouter is a component - gives our application all of the functionality of routing

import './index.css';
import App from './App';

import { store, persistor } from './redux/store';

// the <provider /> is this component class that we get from reactor redux that once passed the store object we'll be able to give that read store context to the rest of the application so we can dispatch actions

ReactDOM.render(
  <Provider store={store}> 
  
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);


