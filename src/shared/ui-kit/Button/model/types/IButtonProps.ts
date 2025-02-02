import { ButtonHTMLAttributes } from 'react'
import { TEntitySize } from '@/shared/types/TEntitySize.ts'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: TEntitySize
    fill?: TEntityColor
    isLoading?: boolean
}
