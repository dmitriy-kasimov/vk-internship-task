import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '@/shared/ui-kit/Label'

const meta: Meta<typeof Label> = {
    title: 'ui-kit/Label',
    component: Label,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
    args: {
        children: 'Что сделать',
        size: 'l',
        color: 'secondary'
    }
}
