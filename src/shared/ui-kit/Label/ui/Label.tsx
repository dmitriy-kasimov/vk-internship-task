import { ElementType, ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './styles/Label.module.scss'

import { TLabelSize } from '../model/types/TLabelSize'
import { TLabelColor } from '../model/types/TLabelColor'
import { TLabelAlign } from '../model/types/TLabelAlign'
import { TLabelHtmlTag } from '../model/types/TLabelHtmlTag'

type LabelProps<T> = {
    size?: TLabelSize
    color?: TLabelColor
    align?: TLabelAlign
    noWrap?: boolean
    bold?: boolean
    className?: string
    children: ReactNode
    as?: T
}

export const Label = <T extends ElementType>(
    props: LabelProps<T extends TLabelHtmlTag ? T : 'span'>
) => {
    const {
        color = 'main',
        size = 'm',
        align = 'left',
        className = '',
        bold = false,
        noWrap = false,

        children,
        as
    } = props

    const Tag = as || 'p'
    return (
        <Tag
            className={classNames(cls.Text, { [cls.bold!]: bold, [cls.noWrap]: noWrap }, [
                cls[size],
                cls[color],
                cls[align],
                className
            ])}
        >
            {children}
        </Tag>
    )
}
