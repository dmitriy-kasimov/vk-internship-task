import { FC } from 'react'

import cls from './Button.module.scss'
import { IButtonProps } from '@/shared/ui-kit/Button/model/types/IButtonProps.ts'
import { classNames, Mods } from '@/shared/lib/classNames/classNames.ts'
import { CircularProgress } from '@/shared/ui-kit/CircularProgress'

export const Button: FC<IButtonProps> = ({
    fill = 'primary',
    size = 's',
    isLoading = false,
    disabled,
    children,
    ...props
}) => {
    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.isLoading]: isLoading,
        [cls[`shimmer-${fill}`]]: isLoading
    }

    const additional = [cls[fill], cls[size]]

    return (
        <button className={classNames(cls.Button, mods, additional)} disabled={disabled} {...props}>
            {isLoading ? <CircularProgress size={size} color={fill} /> : children}
        </button>
    )
}
