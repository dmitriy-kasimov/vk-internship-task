import { FC, ReactNode } from 'react'
import cls from './ContentGroup.module.scss'

type ContentGroupProps = {
    children: ReactNode
}
export const ContentGroup: FC<ContentGroupProps> = ({ children }) => {
    return <div className={cls.ContentGroup}>{children}</div>
}
