import { FC } from 'react'

import cls from './CircularProgress.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { TEntitySize } from '@/shared/types/TEntitySize.ts'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'

type CircularProgressProps = {
    color?: TEntityColor
    size?: TEntitySize
}

export const CircularProgress: FC<CircularProgressProps> = ({
    size = 'small',
    color = 'primary'
}) => {
    const additional = [cls[size], cls[color]]
    return <div className={classNames(cls.loader, {}, additional)} />
}
