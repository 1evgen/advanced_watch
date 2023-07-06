import React, {useEffect, useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Clock} from "./clock/Clock";

function App() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let IntervalID = setInterval(() => {
            setTime(new Date())
            return () => {
                clearInterval(IntervalID)
            }
        }, 1)
    }, [])

    const second = time.getSeconds() * 6 + time.getMilliseconds() / 166.67;
    let minute = time.getMinutes() * 6;
    let hour = (time.getHours() % 12) * 30 + Math.round(minute / 12)

    return (
        <div className={s.App}>
            <Clock hour={hour}
                   minute={minute}
                   second={second}
            />
        </div>
    );
}

export default App;
