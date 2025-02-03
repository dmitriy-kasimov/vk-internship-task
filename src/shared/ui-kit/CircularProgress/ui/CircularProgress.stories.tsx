import type { Meta, StoryObj } from '@storybook/react'

import { CircularProgress } from './CircularProgress'

const meta: Meta<typeof CircularProgress> = {
    title: 'ui-kit/CircularProgress',
    component: CircularProgress,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof CircularProgress>

export const Default: Story = {
    args: {
        color: 'secondary',
        size: 'l'
    }
}
