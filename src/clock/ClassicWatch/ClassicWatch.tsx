import s from "./ClassicWatch.module.css";
import React, {ChangeEvent, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";


 export enum colorStyleWatch {
    MoonEclipse = "moonEclipse",
    Sunrise =  "sunrise",
    FullMoon = "fullMoon"
}

type PropsTypeWatch = {
    hour: number | string
    minute: number | string
    second: number | string
    styleWatch?: colorStyleWatch

}

export const ClassicWatch: React.FC<PropsTypeWatch> = ({hour,
                                                        minute,
                                                        second,
                                                        styleWatch= colorStyleWatch.MoonEclipse }) => {


    const calculatedSecond = +second * 6;
    let calculatedMinute = +minute * 6;
    let calculatedHour = (+hour % 12) * 30 + Math.round(calculatedMinute / 12)


    const styleLineSecond = { transform: `rotate(${calculatedSecond}deg)`};
    const styleLineMinute = {transform: `rotate(${calculatedMinute}deg)`};
    const styleLineHour = {transform: `rotate(${calculatedHour}deg)`};

    const [selectedStyle, setSelectedStyle] = useState<colorStyleWatch>(
        styleWatch
    );

    const handleChangeStyle = (event: SelectChangeEvent) => {
        setSelectedStyle(event.target.value as colorStyleWatch);
    };

    return (
        <div className={s.wrap}>
            <div className={s.select}>
                <Select className={s.select} value={selectedStyle} onChange={handleChangeStyle}>
                    <MenuItem value={colorStyleWatch.MoonEclipse}>Moon Eclipse</MenuItem>
                    <MenuItem value={colorStyleWatch.Sunrise}>Sunrise</MenuItem>
                    <MenuItem value={colorStyleWatch.FullMoon}>Full Moon</MenuItem>
                </Select>
            </div>
            <div className={`${s[selectedStyle]}`}>
                <div className={s.point}></div>
                <div className={`${s.numberClock_1} ${s.number_className}`}>1</div>
                <div className={`${s.numberClock_2} ${s.number_className}`}>2</div>
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
                    <div className={ s.lineHour}></div>
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
}