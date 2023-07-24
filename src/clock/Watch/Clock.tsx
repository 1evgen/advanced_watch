import React from 'react';
import s from "../Watch/Clock.module.css"
import {ClassicWatch} from "../ClassicWatch/ClassicWatch";
import {ElectronicWatch} from "../ElectronicWatch/ElectronicWatch";



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
            <div onClick={switchWatch} className={s.toggle}></div>
            {
                toggle ?
                <ClassicWatch hour={hour}
                              minute={minute}
                              second={second} />
                              // styleWatch={styleWatch} />
                :
                <ElectronicWatch hour={hour}
                                 minute={minute}
                                 second={second} />
            }
        </div>

    );
};


