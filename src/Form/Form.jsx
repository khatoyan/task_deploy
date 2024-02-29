import React from 'react';

import { useState } from 'react';
import { Button } from '../Button/Button';

import styles from './Form.module.css';


export const Form = ({ handleSubmit, title }) =>  {
	const  [isInputWrong, setInputWrong] =  useState(false);
	const  [isLoginInputWrong, setLoginInputWrong] =  useState(false);

  const handleLoginChange = (e) => {
    if (e.target.value.length < 3) {
      setLoginInputWrong(true);
      return;
    }
    
    if (e.target.value.includes('@')) {
      if (!isValidEmail(e.target.value)) {
        setLoginInputWrong(true);
        return;
      }
    }

    setLoginInputWrong(false);
  }

  const  handleChange = (e) => {
    if (e.target.value.length < 8) {
      setInputWrong(true);
      return;
    }

    setInputWrong(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!e.target[0].value) {
      e.target[0].classList.add(styles.error);
      return;
    }

    if (!e.target[1].value) {
        e.target[1].classList.add(styles.error);
        return;
    }
    
    if (e.target[0].classList.contains(styles.error) ||
        e.target[1].classList.contains(styles.error)) {
        return;
    }

    handleSubmit(e);
  }
  return  (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      
      <h1 className={styles.title}>{title}</h1>

      <label htmlFor='login'>Логин</label>
      <input id="login" type="login" onChange={handleLoginChange} 
      className={`${styles.input} ${isLoginInputWrong ? styles.error : ""}`} name="login"></input>

      <label htmlFor='pass'>Пароль</label>
      <input id="pass" type="password" onChange={handleChange}
      className={`${styles.input} ${isInputWrong ? styles.error : ""}`} name="pass"></input>

      <div className={styles.formRow}>
        Минимум 8 символов
      </div>

      <Button type="submit">Отправить</Button>
    </form>
)};


function isValidEmail(value) {
  return /^[A-Z0-9]+@[A-Z0-9]+[.]+[A-Z]{2,4}$/i.test(value);
}