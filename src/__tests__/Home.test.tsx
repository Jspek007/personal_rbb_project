import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
    it ('Should have learn text', () => {
        // Arrange
        render(<Home />)

        // Act
        const LearnText = screen.getByText('Learn');

        // Assert
        expect(LearnText).toBeInTheDocument();
    })
});