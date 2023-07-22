import type {Meta, StoryObj} from '@storybook/react';;
import {Clock} from "../Watch/Clock";


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

export const scoreboardWatch: Story = {
        args: {
                hour: 12,
                minute: 30,
                second: "01",
        }
}