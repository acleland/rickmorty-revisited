import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('Test basic app navigation', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    await screen.findByText(/summer smith/i);
    screen.debug();
    userEvent.click(await screen.findByText(/Rick Sanchez/i));

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    const status = await screen.findByText(/status/i);
    const image = await screen.findByAltText('Image of Rick Sanchez');
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    const title = screen.getByText('Rick and Morty Characters');
    const morty = await screen.findByText(/morty smith/i);
  });

  it('Test history', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    const button = screen.getByRole('button');
    waitFor(() => screen.getByAltText('Image of Morty Smith'), {
      timeout: 3000,
    });

    userEvent.click(button);
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    await screen.findByText('Summer Smith');
    screen.debug();
  });
});
