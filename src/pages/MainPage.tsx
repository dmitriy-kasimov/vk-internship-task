import { FC, useState } from 'react'

import { Label } from '@/shared/ui-kit/Label'
import { Button, ContentGroup } from '@/shared/ui-kit/Button'
import { Counter } from '@/shared/ui-kit/Counter'

export const MainPage: FC = () => {
    const [counter, setCounter] = useState<number>(90)

    return (
        <Button onClick={() => setCounter(prev => prev + 1)} size={'l'}>
            <ContentGroup>
                <Label size={'l'}>Что сделать</Label>
                <Counter quantity={counter} maxQuantity={99} size={'24'} pulse />
            </ContentGroup>
        </Button>
    )
}
