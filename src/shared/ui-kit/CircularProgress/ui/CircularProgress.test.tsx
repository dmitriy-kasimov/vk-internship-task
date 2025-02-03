import { CircularProgress } from './CircularProgress'
import { render, screen } from '@testing-library/react'

describe('CircularProgress', () => {
    test('Test render', () => {
        render(<CircularProgress />)
        expect(screen.getByTestId('circular-progress')).toBeInTheDocument()
    })
})
