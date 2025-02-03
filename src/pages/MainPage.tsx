import { FC } from 'react'
import { Counter } from '@/shared/ui-kit/Counter/ui/Counter.tsx'
import { HStack, VStack } from '@/shared/ui-kit/Stack'

export const MainPage: FC = () => {
    return (
        <HStack gap={'l'}>
            <VStack gap={'l'}>
                <Counter quantity={0} maxQuantity={99} size={'8'} color={'primary'} pulse />
                <Counter quantity={0} maxQuantity={99} size={'12'} color={'primary'} />
                <Counter quantity={100} maxQuantity={99} size={'16'} color={'primary'} />
                <Counter quantity={1000} maxQuantity={99} size={'20'} color={'primary'} />
                <Counter quantity={100} maxQuantity={99} size={'24'} color={'primary'} pulse />
            </VStack>
            <VStack gap={'l'}>
                <Counter quantity={0} maxQuantity={99} size={'8'} color={'secondary'} />
                <Counter quantity={0} maxQuantity={99} size={'12'} color={'secondary'} />
                <Counter quantity={0} maxQuantity={99} size={'16'} color={'secondary'} pulse />
                <Counter quantity={0} maxQuantity={99} size={'20'} color={'secondary'} />
                <Counter quantity={100} maxQuantity={99} size={'24'} color={'secondary'} />
            </VStack>
        </HStack>
    )
}
