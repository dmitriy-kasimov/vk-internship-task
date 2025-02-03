import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('Test render', () => {
        render(<Button>MyButton</Button>)
        expect(screen.getByText('MyButton')).toBeInTheDocument()
    })
})
