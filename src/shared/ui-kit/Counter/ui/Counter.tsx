import { FC, ReactNode } from 'react'
import { Pulse } from '@/shared/ui-kit/Pulse/ui/Pulse.tsx'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'
import { TEntitySizePx } from '@/shared/types/TEntitySizePx.ts'
import { Label } from '@/shared/ui-kit/Label'
import { truncateNumber } from '@/shared/ui-kit/Counter/helpers/truncateNumber.ts'

type CounterProps = {
    color?: TEntityColor
    size?: TEntitySizePx
    pulse?: boolean
    quantity: number
    maxQuantity: number
}
export const Counter: FC<CounterProps> = ({
    quantity,
    maxQuantity,
    color = 'primary',
    size = '8',
    pulse = false
}) => {
    const counterValue = truncateNumber(quantity, maxQuantity)

    const mapQuantityToLabel: Record<typeof size, ReactNode | null> = {
        8: null,
        12: null,
        16: (
            <Label data-testid={'counter-value'} size={'xs'} color={color}>
                {counterValue}
            </Label>
        ),
        20: (
            <Label data-testid={'counter-value'} size={'s'} color={color}>
                {counterValue}
            </Label>
        ),
        24: (
            <Label data-testid={'counter-value'} size={'m'} color={color}>
                {counterValue}
            </Label>
        )
    }
    return (
        <Pulse
            data-testid={'counter'}
            size={size}
            fill={color}
            children={mapQuantityToLabel[size]}
            pulse={pulse}
        />
    )
}
