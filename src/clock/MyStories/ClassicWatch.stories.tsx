import type {Meta, StoryObj} from '@storybook/react';
import {ClassicWatch, colorStyleWatch} from "../ClassicWatch/ClassicWatch";
import {useEffect, useState} from "react";


const meta: Meta<typeof ClassicWatch> = {
    title: 'Clock/classic watch',
    component: ClassicWatch,
    decorators: [
        (Story) => (
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <Story />
            </div>
        ),
    ],
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

const  WorkingWatch = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        let IntervalID = setInterval(() => {
            setTime(new Date())
            return () => {
                clearInterval(IntervalID)
            }
        }, 1000)
    }, [])

    let second = time.getSeconds()
    let minute = time.getMinutes()
    let hour = time.getHours()
    return <ClassicWatch hour={hour} minute={minute} second={second} styleWatch={colorStyleWatch.MoonEclipse}/>
}

export const classicWatch: Story = {
    render: ()=> <WorkingWatch />
}

