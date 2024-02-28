import React, { useState } from 'react';
import { Button } from '../Button/Button';

import { useNavigate } from 'react-router-dom';

import styles from './Main.css';


export const Main = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setButtonDisabled(!isButtonDisabled);
  };

  const handleFormButton = () => {
    navigate('/regPage');
  }

  const handleAnotherPageButton = () => {
    navigate('/year');
  }

  return (
        <main className="Main">
            Welcome!
            <Button disabled={isButtonDisabled} onClick={handleClick}>{isButtonDisabled ? "Disabled." : "Active!"}</Button>
            <Button onClick={handleFormButton}>Get form</Button>
            <Button onClick={handleAnotherPageButton}>Page</Button>
        </main>
  );
};


export default Main