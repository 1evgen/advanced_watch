import type {Meta, StoryObj} from '@storybook/react';
import {SwitcherClock} from "../Switcher/Switcher";
import {action} from "@storybook/addon-actions";


const meta: Meta<typeof SwitcherClock> = {
    title: 'Clock/Switch',
    component: SwitcherClock,
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


export const SwitcherStories: Story = {
            args: {
                toggle: true,
                switchWatch: action('switch a view clock')
            }

}

