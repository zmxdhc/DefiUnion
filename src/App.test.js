// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiUnion title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiUnion/i);
    expect(titleElement).toBeInTheDocument();
});
