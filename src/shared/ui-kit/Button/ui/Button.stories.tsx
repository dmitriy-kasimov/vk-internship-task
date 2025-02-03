import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { Label } from '@/shared/ui-kit/Label'
import { ContentGroup } from '@/shared/ui-kit/Button'
import { Counter } from '@/shared/ui-kit/Counter/ui/Counter.tsx'

const meta: Meta<typeof Button> = {
    title: 'ui-kit/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: <Label>Button</Label>,
        isLoading: false,
        disabled: false,
        fill: 'primary',
        size: 's'
    }
}

export const WithCounter: Story = {
    args: {
        children: (
            <ContentGroup>
                <Label size={'l'}>Что сделать</Label>
                <Counter quantity={0} maxQuantity={99} size={'24'} />
            </ContentGroup>
        ),
        isLoading: false,
        disabled: false,
        fill: 'primary',
        size: 'l'
    }
}
