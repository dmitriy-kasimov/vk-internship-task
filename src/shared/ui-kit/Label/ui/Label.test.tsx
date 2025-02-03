import { Label } from './Label'
import { render, screen } from '@testing-library/react'

describe('Label', () => {
    test('Test render', () => {
        render(<Label>MyLabel</Label>)
        expect(screen.getByTestId('Label')).toBeInTheDocument()
    })

    test('Test the Label has value', () => {
        render(<Label>Что делать</Label>)
        expect(screen.getByTestId('Label')).toHaveTextContent('Что делать')
    })
})
