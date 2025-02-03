import { Pulse } from './Pulse'
import { render, screen } from '@testing-library/react'

describe('Pulse', () => {
    test('Test render', () => {
        render(<Pulse />)
        expect(screen.getByTestId('Pulse')).toBeInTheDocument()
    })

    test('Test off pulse', () => {
        render(<Pulse />)
        expect(screen.getByTestId('pulse-frame-one')).not.toHaveClass('pulse')
        expect(screen.getByTestId('pulse-frame-two')).not.toHaveClass('pulse')
    })

    test('Test pulse', () => {
        render(<Pulse size={'24'} pulse />)
        expect(screen.getByTestId('pulse-frame-one')).toHaveClass('pulse')
        expect(screen.getByTestId('pulse-frame-two')).toHaveClass('pulse')
    })
})
