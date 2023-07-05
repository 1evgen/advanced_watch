import React from 'react';
import s from './Clock.module.css'
type PropsType = {}



export const Clock: React.FC<PropsType> = ({}) => {
    return (
        <div className={s.wrap}>
            <div className={s.bodyClock}>
                <div className={s.point}></div>
                <div className={s.numberClock_1}>1</div>
                <div className={s.numberClock_2}>2</div>
                <div className={s.numberClock_3}>3</div>
                <div className={s.numberClock_4}>4</div>
                <div className={s.numberClock_5}>5</div>
                <div className={s.numberClock_6}>6</div>
                <div className={s.numberClock_7}>7</div>
                <div className={s.numberClock_8}>8</div>
                <div className={s.numberClock_9}>9</div>
                <div className={s.numberClock_10}>10</div>
                <div className={s.numberClock_11}>11</div>
                <div className={s.numberClock_12}>12</div>
            </div>
              {/*  <div className={s.arrows}>
                    <div className={s.lineHour}></div>
                    <div className={s.lineMinute}></div>
                    <div className={s.lineSecond}></div>
                </div>
            
                <div className={s.markupForClock}>

                </div>*/}
        </div>
    );
};

