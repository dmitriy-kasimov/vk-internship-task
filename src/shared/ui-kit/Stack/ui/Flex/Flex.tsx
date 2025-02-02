import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import cls from './Flex.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames.ts'
import { TEntitySize } from '@/shared/types/TEntitySize.ts'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexWrap = 'nowrap' | 'wrap'

const justifyClasses: Record<FlexJustify, string | undefined> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string | undefined> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string | undefined> = {
    row: cls.directionRow,
    column: cls.directionColumn
}

const gapClasses: Record<TEntitySize, string | undefined> = {
    s: cls.gapS,
    m: cls.gapM,
    l: cls.gapL
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export interface FlexProps extends DivProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction: FlexDirection
    wrap?: FlexWrap
    gap?: TEntitySize
    max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        direction = 'row',
        wrap = 'nowrap',
        align = 'center',
        justify = 'start',
        gap,
        max,
        ...otherProps
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap]
    ]

    const mods: Mods = {
        [cls.max!]: max
    }

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    )
}
