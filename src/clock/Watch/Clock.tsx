import React from 'react';
import s from "../Watch/Clock.module.css"
import {ClassicWatch} from "../ClassicWatch/ClassicWatch";
import {ElectronicWatch} from "../ElectronicWatch/ElectronicWatch";

 export enum colorStyleWatch {
     MoonEclipse = "moonEclipse",
     Sunrise =  "sunrise",
     Tokio = "tokio"
 }

type PropsType = {
    hour: number | string
    minute: number | string
    second: number | string
    millisecond: number
    styleWatch?: colorStyleWatch
    switchWatch: ()=> void
    toggle: boolean
}

export const Clock: React.FC<PropsType> = ({
                                               hour,
                                               minute,
                                               second,
                                               millisecond,
                                               styleWatch= colorStyleWatch.Sunrise,
                                               switchWatch,
                                               toggle,
                                           }) => {
    return (
        <div onClick={switchWatch} className={s.wrap}>
            <div className={s.toggle}>Button</div>
            {
                toggle ?
                <ClassicWatch hour={hour}
                              minute={minute}
                              second={second}
                              millisecond={millisecond as number}
                              styleWatch={styleWatch} />
                :
                <ElectronicWatch hour={hour} minute={minute} second={second} />

            }
        </div>

    );
};


