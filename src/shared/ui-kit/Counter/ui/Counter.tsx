import { FC, ReactNode } from 'react'
import { Pulse } from '@/shared/ui-kit/Pulse/ui/Pulse.tsx'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'
import { TEntitySizePx } from '@/shared/types/TEntitySizePx.ts'
import { Label } from '@/shared/ui-kit/Label'

type CounterProps = {
    color?: TEntityColor
    size?: TEntitySizePx
    pulse?: boolean
    quantity: number
}
export const Counter: FC<CounterProps> = ({
    quantity,
    color = 'primary',
    size = '8',
    pulse = false
}) => {
    const mapQuantityToLabel: Record<typeof size, ReactNode | null> = {
        8: null,
        12: null,
        16: <Label size={'xs'} color={color}>{`${quantity}`}</Label>,
        20: <Label size={'s'} color={color}>{`${quantity}`}</Label>,
        24: <Label size={'m'} color={color}>{`${quantity}`}</Label>
    }
    return <Pulse size={size} fill={color} children={mapQuantityToLabel[size]} pulse={pulse} />
}
