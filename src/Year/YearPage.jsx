import React, { useEffect, useState } from 'react';

import styles from './Year.module.css';

export const Year = () => {
    const [date, setDate] = useState('');
    
    useEffect(() => {
        const currDate = new Date();
        const date = currDate.getFullYear() + '-' + (currDate.getMonth() + 1) + '-' + currDate.getDate();
        setDate(date);
    }, []);


    return (
        <main className={styles.main}>
            <p className={styles.data}>
                Текущая дата: {date}
            </p>
        </main>
    );
};

export default Year;