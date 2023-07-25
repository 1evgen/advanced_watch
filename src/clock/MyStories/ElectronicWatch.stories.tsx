import type {Meta, StoryObj} from '@storybook/react';
import {useEffect, useState} from "react";
import {ElectronicWatch} from "../ElectronicWatch/ElectronicWatch";


const meta: Meta<typeof ElectronicWatch> = {
    title: 'Clock/electronic Watch',
    component: ElectronicWatch,
    parameters: {
        backgrounds: {
            default: 'color default',
            values: [
                {name: "color default", value: "#120458"}
            ]
        }
    },
    decorators: [
        (Story) => (
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {},
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

    let hour = time.getHours().toString().padStart(2, '0')
    let minute = time.getMinutes().toString().padStart(2, '0')
    let second = time.getSeconds().toString().padStart(2, '0')

    return <ElectronicWatch hour={hour} minute={minute} second={second}/>
}

export const electronicWatch: Story = {
    render: ()=> <WorkingWatch />
}

