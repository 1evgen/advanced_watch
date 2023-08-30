import s from "../../ClassicWatch/ClassicWatch.module.css";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useState} from "react";


export enum colorStyleWatch {
    MoonEclipse = "moonEclipse",
    Sunrise =  "sunrise",
    FullMoon = "fullMoon"
}


type PropsType = {
    styleWatch: colorStyleWatch

}


export const SelectComponent: React.FC<PropsType> = ({styleWatch})=> {
    const [selectedStyle, setSelectedStyle] = useState<colorStyleWatch>(styleWatch);
    const handleChangeStyle = (event: SelectChangeEvent) => {
        setSelectedStyle(event.target.value as colorStyleWatch);
    };
    return (
        <div className={s.select}>
            <Select className={s.select} value={selectedStyle} onChange={handleChangeStyle}>
                <MenuItem value={colorStyleWatch.MoonEclipse}>Moon Eclipse</MenuItem>
                <MenuItem value={colorStyleWatch.Sunrise}>Sunrise</MenuItem>
                <MenuItem value={colorStyleWatch.FullMoon}>Full Moon</MenuItem>
            </Select>
        </div>
    )
}