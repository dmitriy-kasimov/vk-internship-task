import { ElementType } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'

import cls from './styles/Label.module.scss'

import { truncateLabel } from '../helpers/truncateLabel.ts'
import { TLabelSize } from '../model/types/TLabelSize.ts'
import { TLabelAlign } from '../model/types/TLabelAlign'
import { TLabelHtmlTag } from '../model/types/TLabelHtmlTag'

type LabelProps<T> = {
    size?: TLabelSize
    color?: TEntityColor
    align?: TLabelAlign
    noWrap?: boolean
    className?: string
    children: string
    maxLength?: number
    as?: T
}

export const Label = <T extends ElementType>(
    props: LabelProps<T extends TLabelHtmlTag ? T : 'span'>
) => {
    const {
        color = 'primary',
        size = 'xs',
        align = 'left',
        className = '',
        noWrap = false,

        children,
        maxLength = Infinity,
        as,
        ...otherProps
    } = props

    const Tag = as || 'p'
    const additional = [cls[size], cls[color], cls[align], className]

    const mods: Mods = {
        [cls.noWrap]: noWrap,
        [cls.lengthLimited]: maxLength !== Infinity
    }

    return (
        <Tag
            data-testid={'Label'}
            className={classNames(cls.Label, mods, additional)}
            {...otherProps}
        >
            {truncateLabel(children, maxLength)}
        </Tag>
    )
}
