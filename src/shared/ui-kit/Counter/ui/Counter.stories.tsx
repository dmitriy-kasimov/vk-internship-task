import type { Meta, StoryObj } from '@storybook/react'

import { Counter } from './Counter'

const meta: Meta<typeof Counter> = {
    title: 'ui-kit/Counter',
    component: Counter,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Counter>

export const Primary: Story = {
    args: {
        quantity: 0,
        size: '24',
        pulse: true,
        color: 'primary',
        maxQuantity: 99
    }
}

export const GreaterThanMax: Story = {
    args: {
        quantity: 100,
        size: '24',
        pulse: true,
        color: 'primary',
        maxQuantity: 99
    }
}
