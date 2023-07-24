import React, {useEffect, useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Clock} from "./clock/Watch/Clock";


function App() {
    const [time, setTime] = useState(new Date())
    const [toggle, setToggle] = useState(true)

    const switchClock = ()=> {
        setToggle(!toggle)
        console.log(toggle)
    }

    useEffect(() => {
        let IntervalID = setInterval(() => {
            setTime(new Date())
            return () => {
                clearInterval(IntervalID)
            }
        }, 1000)
    }, [])


     let hour = time.getHours().toString().padStart(2, '0')
     let minute = time.getMinutes().toString().padStart(2, '0')
     let second = time.getSeconds().toString().padStart(2, '0')


    return (
        <div className={s.App}>
            <Clock hour={hour}
                   minute={minute}
                   second={second}
                   switchWatch={switchClock}
                   toggle={toggle}
            />
        </div>
    );
}

export default App;
