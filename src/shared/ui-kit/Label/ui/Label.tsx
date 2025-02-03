import { ElementType } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import cls from './styles/Label.module.scss'

import { TLabelAlign } from '../model/types/TLabelAlign'
import { TLabelHtmlTag } from '../model/types/TLabelHtmlTag'
import { TEntityColor } from '@/shared/types/TEntityColor.ts'
import { truncateLabel } from '@/shared/ui-kit/Label/helpers/truncateLabel.ts'
import { TLabelSize } from '@/shared/ui-kit/Label/model/types/TLabelSize.ts'

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
        as
    } = props

    const Tag = as || 'p'
    const additional = [cls[size], cls[color], cls[align], className]

    const mods: Mods = {
        [cls.noWrap]: noWrap,
        [cls.lengthLimited]: maxLength !== Infinity
    }

    return (
        <Tag className={classNames(cls.Label, mods, additional)}>
            {truncateLabel(children, maxLength)}
        </Tag>
    )
}
