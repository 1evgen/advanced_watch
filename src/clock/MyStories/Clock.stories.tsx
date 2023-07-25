import type {Meta, StoryObj} from '@storybook/react';
import {Clock} from "../Watch/Clock";
import {action} from "@storybook/addon-actions"



const meta: Meta<typeof Clock> = {
    title: 'Clock/model watch',
    component: Clock,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'color default',
            values: [
                {name: "color default", value: "#120458"}
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
                switchWatch: action('change type watch'),
                toggle: false,


        }
}

