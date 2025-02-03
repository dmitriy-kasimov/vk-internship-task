import { FC, ReactNode } from 'react'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'

import cls from './Pulse.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames.ts'
import { TEntitySizePx } from '@/shared/types/TEntitySizePx.ts'

type PulseProps = {
    fill?: TEntityColor
    size?: TEntitySizePx
    pulse?: boolean
    children: ReactNode
}
export const Pulse: FC<PulseProps> = ({ children, fill = 'primary', size = 8, pulse }) => {
    const additional = [cls[fill], cls[`size-${size}`]]

    const mods: Mods = {
        [cls.pulse]: pulse
    }

    return (
        <div
            className={classNames(cls['live-indicator'], { [cls.pulseOff]: !pulse }, [
                cls[`size-${size}`]
            ])}
        >
            <div className={classNames(cls['red-dot'], {}, additional)}></div>
            <div className={classNames('', mods, [cls.one, ...additional])}></div>
            <div className={classNames('', mods, [cls.two, ...additional])}></div>
            <div className={cls.content}>{children}</div>
        </div>
    )
}
