import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './config/Routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Route component={Routes}/>
    </BrowserRouter>
  );
}

export default App;
