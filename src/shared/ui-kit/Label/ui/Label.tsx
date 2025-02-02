import { ElementType, ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './styles/Label.module.scss'

import { TLabelAlign } from '../model/types/TLabelAlign'
import { TLabelHtmlTag } from '../model/types/TLabelHtmlTag'
import { TEntitySize } from '@/shared/types/TEntitySize.ts'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'

type LabelProps<T> = {
    size?: TEntitySize
    color?: TEntityColor
    align?: TLabelAlign
    noWrap?: boolean
    className?: string
    children: ReactNode
    as?: T
}

export const Label = <T extends ElementType>(
    props: LabelProps<T extends TLabelHtmlTag ? T : 'span'>
) => {
    const {
        color = 'primary',
        size = 'm',
        align = 'left',
        className = '',
        noWrap = false,

        children,
        as
    } = props

    const Tag = as || 'p'
    const additional = [cls[size], cls[color], cls[align], className]

    return (
        <Tag className={classNames(cls.Label, { [cls.noWrap]: noWrap }, additional)}>
            {children}
        </Tag>
    )
}
