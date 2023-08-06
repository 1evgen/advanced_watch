import React from 'react';
import s from '../ElectronicWatch/ElectronicWatch.module.css'
import {MenuItem, Select} from "@mui/material";
import {colorStyleWatch} from "../ClassicWatch/ClassicWatch";

type PropsType = {
    hour: number | string
    minute: number | string
    second: number | string

}

export const ElectronicWatch = (props: PropsType) => {
    return (
        <div className={s.wrapperForWatch} >
        <div className={s.bodyClock}>
            <div className={`${s.hour} ${s.numbers}`}>{props.hour}</div>
            <div className={s.colon}>:</div>
            <div className={`${s.minute} ${s.numbers}`}>{props.minute}</div>
            <div className={s.colon}>:</div>
            <div className={`${s.second} ${s.numbers}`}>{props.second}</div>
        </div>
        </div>
    );
};

