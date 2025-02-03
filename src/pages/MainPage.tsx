import { FC } from 'react'
import { Counter } from '@/shared/ui-kit/Counter/ui/Counter.tsx'
import { HStack, VStack } from '@/shared/ui-kit/Stack'

export const MainPage: FC = () => {
    return (
        <HStack gap={'l'}>
            <VStack gap={'l'}>
                <Counter quantity={0} size={'8'} color={'primary'} pulse />
                <Counter quantity={0} size={'12'} color={'primary'} />
                <Counter quantity={0} size={'16'} color={'primary'} />
                <Counter quantity={0} size={'20'} color={'primary'} />
                <Counter quantity={0} size={'24'} color={'primary'} pulse />
            </VStack>
            <VStack gap={'l'}>
                <Counter quantity={0} size={'8'} color={'secondary'} />
                <Counter quantity={0} size={'12'} color={'secondary'} />
                <Counter quantity={0} size={'16'} color={'secondary'} pulse />
                <Counter quantity={0} size={'20'} color={'secondary'} />
                <Counter quantity={0} size={'24'} color={'secondary'} />
            </VStack>
        </HStack>

        // <HStack gap={'l'}>
        //     <VStack gap={'m'}>
        //         <Button size={'s'}>
        //             <Label size={'s'} maxLength={3}>
        //                 Test
        //             </Label>
        //         </Button>
        //         <Button size={'m'} disabled>
        //             <Label size={'m'}>Test</Label>
        //         </Button>
        //         <Button size={'l'}>
        //             <Label size={'l'}>Test</Label>
        //         </Button>
        //         <Button size={'l'} isLoading>
        //             <Label size={'l'}>Test</Label>
        //         </Button>
        //     </VStack>
        //     <VStack gap={'m'}>
        //         <Button size={'s'} fill={'secondary'}>
        //             <Label size={'s'} color={'secondary'}>
        //                 Test
        //             </Label>
        //         </Button>
        //         <Button size={'m'} fill={'secondary'}>
        //             <Label color={'secondary'} size={'m'}>
        //                 Test
        //             </Label>
        //         </Button>
        //         <Button size={'l'} fill={'secondary'}>
        //             <Label color={'secondary'} size={'l'}>
        //                 Test
        //             </Label>
        //         </Button>
        //         <Button size={'l'} fill={'secondary'} isLoading>
        //             <Label color={'secondary'} size={'l'}>
        //                 Test
        //             </Label>
        //         </Button>
        //     </VStack>
        // </HStack>
    )
}
