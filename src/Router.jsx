import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RegPage } from './RegPage';
import { Main } from './Main';
import { Year } from './Year';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/regPage" element={<RegPage />} />
      <Route path="/year" element={<Year />} />
    </Routes>
  );
};
