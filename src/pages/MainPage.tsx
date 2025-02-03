import { FC } from 'react'
import { Label } from '@/shared/ui-kit/Label'
import { HStack, VStack } from '@/shared/ui-kit/Stack'
import { Button } from '@/shared/ui-kit/Button'

export const MainPage: FC = () => {
    return (
        <HStack gap={'l'}>
            <VStack gap={'m'}>
                <Button size={'s'}>
                    <Label size={'s'} maxLength={3}>
                        Test
                    </Label>
                </Button>
                <Button size={'m'} disabled>
                    <Label size={'m'}>Test</Label>
                </Button>
                <Button size={'l'}>
                    <Label size={'l'}>Test</Label>
                </Button>
                <Button size={'l'} isLoading>
                    <Label size={'l'}>Test</Label>
                </Button>
            </VStack>
            <VStack gap={'m'}>
                <Button size={'s'} fill={'secondary'}>
                    <Label size={'s'} color={'secondary'}>
                        Test
                    </Label>
                </Button>
                <Button size={'m'} fill={'secondary'}>
                    <Label color={'secondary'} size={'m'}>
                        Test
                    </Label>
                </Button>
                <Button size={'l'} fill={'secondary'}>
                    <Label color={'secondary'} size={'l'}>
                        Test
                    </Label>
                </Button>
                <Button size={'l'} fill={'secondary'} isLoading>
                    <Label color={'secondary'} size={'l'}>
                        Test
                    </Label>
                </Button>
            </VStack>
        </HStack>
    )
}
