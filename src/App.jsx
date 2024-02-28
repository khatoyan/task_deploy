import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import styles from './App.css';

export const App = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
    </BrowserRouter>
  );
};
