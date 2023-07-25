import React from 'react';
import s from "../Watch/Clock.module.css"
import {ClassicWatch} from "../ClassicWatch/ClassicWatch";
import {ElectronicWatch} from "../ElectronicWatch/ElectronicWatch";
import {SwitcherClock} from "../Switcher/Switcher";

type PropsType = {
    hour: number | string
    minute: number | string
    second: number | string
    switchWatch: ()=> void
    toggle: boolean
}

export const Clock: React.FC<PropsType> = ({
                                               hour,
                                               minute,
                                               second,
                                               switchWatch,
                                               toggle,
                                           }) => {

    return (
        <div className={s.wrap}>
            {
                toggle ?
                <ClassicWatch hour={hour}
                              minute={minute}
                              second={second} />
                :
                <ElectronicWatch hour={hour}
                                 minute={minute}
                                 second={second} />
            }
            <div className={s.switcher}>
                <SwitcherClock toggle={toggle} switchWatch={switchWatch}/>
            </div>
        </div>

    );
};


