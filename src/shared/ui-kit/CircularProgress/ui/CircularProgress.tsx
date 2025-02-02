import { FC } from 'react'

import cls from './CircularProgress.module.scss'
import { TCircularProgressSize } from '../model/types/TCircularProgressSize.ts'
import { TCircularProgressColor } from '../model/types/TCircularProgressColor.ts'
import { classNames } from '@/shared/lib/classNames/classNames.ts'

type CircularProgressProps = {
    color?: TCircularProgressColor
    size?: TCircularProgressSize
}

export const CircularProgress: FC<CircularProgressProps> = ({
    size = 'small',
    color = 'primary'
}) => {
    const additional = [cls[size], cls[color]]
    return <div className={classNames(cls.loader, {}, additional)} />
}
