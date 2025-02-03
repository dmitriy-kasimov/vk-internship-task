import { FC, ReactNode } from 'react'

import { TEntityColor } from '@/shared/types/TEntityColor.ts'
import { classNames, Mods } from '@/shared/lib/classNames/classNames.ts'
import { TEntitySizePx } from '@/shared/types/TEntitySizePx.ts'

import cls from './Pulse.module.scss'

type PulseProps = {
    fill?: TEntityColor
    size?: TEntitySizePx
    pulse?: boolean
    children?: ReactNode
}
export const Pulse: FC<PulseProps> = ({
    children,
    fill = 'primary',
    size = 8,
    pulse,
    ...otherProps
}) => {
    const additional = [cls[fill], cls[`size-${size}`]]

    const mods: Mods = {
        [cls.pulse]: pulse
    }

    return (
        <div
            data-testid={'Pulse'}
            className={classNames(cls['live-indicator'], { [cls.pulseOff]: !pulse }, [
                cls[`size-${size}`]
            ])}
            {...otherProps}
        >
            <div className={classNames(cls['red-dot'], {}, additional)}></div>
            <div
                data-testid={'pulse-frame-one'}
                className={classNames('', mods, [cls.one, ...additional])}
            ></div>
            <div
                data-testid={'pulse-frame-two'}
                className={classNames('', mods, [cls.two, ...additional])}
            ></div>
            <div data-testid={'pulse-content'} className={cls.content}>
                {children}
            </div>
        </div>
    )
}
