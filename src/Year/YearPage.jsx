import React, { useEffect, useState } from 'react';

import { Button } from '../Button/Button';

import styles from './Year.module.css';

export const Year = () => {
    const [date, setDate] = useState('');
    const [isClicked, setClicked] = useState(false);

    useEffect(() => {
        const currDate = new Date();
        const time = currDate.getHours() + ":"  
                    + currDate.getMinutes() + ":" 
                    + currDate.getSeconds();
        const date = currDate.getFullYear() + '-' 
                    + (currDate.getMonth() + 1) + '-' 
                    + currDate.getDate() + ", " + time;
        
        setDate(date);
    }, [isClicked]);

    const handleClick = () => {
        setClicked(!isClicked);
    }
    
    return (
        <main className={styles.main}>
            <p className={styles.data}>
                Текущая дата: <span className={styles.date}>{date}</span>
            </p>
            <Button onClick={handleClick}>Обновить</Button>
        </main>
    );
};

export default Year;