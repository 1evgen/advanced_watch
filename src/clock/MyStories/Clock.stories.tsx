import type {Meta, StoryObj} from '@storybook/react';
import {Clock, colorStyleWatch} from "../classicWatch/Clock";
import React, {useEffect, useState} from "react";

const meta: Meta<typeof Clock> = {
    title: 'Clock/classic watch',
    component: Clock,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'classic',
            values: [
                {name: "classic", value: "#120458"}
            ]
        }
    },
    argTypes: {

        },

};

export default meta;
type Story = StoryObj<typeof meta>;


const WrapperFunction = ()=> {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let IntervalID = setInterval(() => {
            setTime(new Date())
            return () => {
                clearInterval(IntervalID)
            }
        }, 1)
    }, [])
    const second = time.getSeconds() * 6 + time.getMilliseconds() / 166.67;
    let minute = time.getMinutes() * 6;
    let hour = (time.getHours() % 12) * 30 + Math.round(minute / 12)

    return <Clock hour={hour} minute={minute} second={second}  styleWatch={colorStyleWatch.MoonEclipse}/>
}



export const ClockStories: Story = {
        render: (args)=> <WrapperFunction />

};