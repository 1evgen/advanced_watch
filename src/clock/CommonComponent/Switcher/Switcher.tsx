import React from "react";
import {Switch} from "@mui/material";

type PropsType = {
    toggle: boolean
    switchWatch: ()=> void
}

export const SwitcherClock = (props: PropsType) =>  {
    return (
        <div>
            <Switch
                checked={props.toggle}
                onChange={props.switchWatch}
                sx={
                { transform: "scale(2)",}
            }
            />
        </div>
    )
}