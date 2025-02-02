import { FC } from 'react'
import { Label } from '@/shared/ui-kit/Label'
import { VStack } from '@/shared/ui-kit/Stack'
import { CircularProgress } from '@/shared/ui-kit/CircularProgress'

export const MainPage: FC = () => {
    return (
        <VStack gap={'8'}>
            <CircularProgress />
            <Label>Загрузка...</Label>
        </VStack>
    )
}
