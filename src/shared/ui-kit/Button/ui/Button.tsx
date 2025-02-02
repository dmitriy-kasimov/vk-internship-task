import { FC } from 'react'

import cls from './Button.module.scss'
import { IButtonProps } from '@/shared/ui-kit/Button/model/types/IButtonProps.ts'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { CircularProgress } from '@/shared/ui-kit/CircularProgress'

export const Button: FC<IButtonProps> = ({
    fill = 'primary',
    size = 's',
    isLoading = false,
    children,
    ...props
}) => {
    const additional = [cls[fill], cls[size]]
    return (
        <button className={classNames(cls.Button, {}, additional)} {...props}>
            {isLoading ? <CircularProgress size={size} color={fill} /> : children}
        </button>
    )
}
