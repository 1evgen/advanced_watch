import React from 'react';
import s from './Clock.module.css'

type PropsType = {
    hour: number
    minute: number
    second: number
}

export const Clock: React.FC<PropsType> = ({
                                               hour,
                                               minute,
                                               second,
                                           }) => {

    const styleLineSecond = { transform: `rotate(${second}deg)`};
    const styleLineMinute = {transform: `rotate(${minute}deg)`};
    const styleLineHour = {transform: `rotate(${hour}deg)`};

    return (
        <div className={s.wrap}>
            <div className={s.bodyClock}>
                <div className={s.point}></div>
                <div className={`${s.numberClock_1} ${s.number_className}`}>1</div>
                <div className={`${s.numberClock_2} ${s.number_className}`}> 2</div>
                <div className={`${s.numberClock_3} ${s.number_className}`}>3</div>
                <div className={`${s.numberClock_4} ${s.number_className}`}>4</div>
                <div className={`${s.numberClock_5} ${s.number_className}`}>5</div>
                <div className={`${s.numberClock_6} ${s.number_className}`}>6</div>
                <div className={`${s.numberClock_7} ${s.number_className}`}>7</div>
                <div className={`${s.numberClock_8} ${s.number_className}`}>8</div>
                <div className={`${s.numberClock_9} ${s.number_className}`}>9</div>
                <div className={`${s.numberClock_10} ${s.number_className}`}>10</div>
                <div className={`${s.numberClock_11} ${s.number_className}`}>11</div>
                <div className={`${s.numberClock_12} ${s.number_className}`}>12</div>

                <div className={s.boxLineHour} style={styleLineHour}>
                <div className={s.lineHour}></div>
                </div>

                <div className={s.boxLineMinute} style={styleLineMinute}>
                    <div className={s.lineMinute} ></div>
                </div>

                <div className={s.boxLineSecond} style={styleLineSecond}>
                    <div className={s.lineSecond}></div>
                </div>

            </div>

        </div>
    );
};

