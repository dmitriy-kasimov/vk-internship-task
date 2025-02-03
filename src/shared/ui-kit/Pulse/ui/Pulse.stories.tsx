import type { Meta, StoryObj } from '@storybook/react'
import { Pulse } from './Pulse.tsx'

const meta: Meta<typeof Pulse> = {
    title: 'ui-kit/Pulse',
    component: Pulse,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Pulse>

export const Default: Story = {
    args: {
        size: '24',
        pulse: true
    }
}
