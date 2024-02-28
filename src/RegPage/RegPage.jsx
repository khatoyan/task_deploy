import React, { useState } from 'react';

import { Form } from '../Form/Form';

import styles from './RegPage.css';

export const RegPage = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target[0].value) {
        e.target[0].classList.add('error');
        return;
    }

    if (!e.target[1].value) {
        e.target[1].classList.add('error');
        return;
    }
    
    if (e.target[0].classList.contains('error') ||
        e.target[1].classList.contains('error')) {
        return;
    }

    const formData =  Object.fromEntries(new FormData(e.target));
    setData([...data, formData]);
    e.target.reset();
  };


  return (
    <section className='reg-page'>
      <Form handleSubmit={handleSubmit} title="Добавить пользователя в список">
      </Form>

      <div className="data">
        <h2>Список пользователей</h2>
        {data.length !== 0 && data.map((elem, index) => 
           (<p>Пользователь <span className="data-key">#{index+1}</span><br/>
               Логин: <span className="data-key">{elem.login}</span><br/>
               Пароль: <span className="data-key">{elem.pass}</span>
           </p>)
        )}
      </div>
    </section>
  );
};
