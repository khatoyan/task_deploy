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
    console.log(e.target.value.length || !e.target.value)
    if (e.target.value.length < 8) {
      setInputWrong(true);
      return;
    }

    setInputWrong(false);
  };

  return  (
    <form className={styles.form} onSubmit={handleSubmit}>
      
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
  return /^[A-Z0-9]+@[A-Z0-9]+.[A-Z]{2,4}$/i.test(value);
}