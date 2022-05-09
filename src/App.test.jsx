import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Test basic app navigation', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText(/loading/i);
  });
});
