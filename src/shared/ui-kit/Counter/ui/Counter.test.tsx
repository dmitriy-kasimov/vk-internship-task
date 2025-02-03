import { Counter } from './Counter'
import { render, screen } from '@testing-library/react'

describe('Counter', () => {
    test('Test render', () => {
        render(<Counter quantity={0} maxQuantity={99} />)
        expect(screen.getByTestId('counter')).toBeInTheDocument()
    })

    test('Test the counter has value', () => {
        render(<Counter quantity={50} maxQuantity={99} size={'24'} />)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('50')
    })

    test('Test overflow of the counter', () => {
        render(<Counter quantity={100} maxQuantity={99} size={'24'} />)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('99+')
    })
})
