import { cleanup, render, screen, waitFor } from '@testing-library/react';
import ContentFilters from './ContentFilters';
import { Provider } from 'react-redux';
import { store } from '../../../Store/store';
import userEvent from '@testing-library/user-event';
import CountriesContainer from '../CountriesContainer/CountriesContainer';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import App from '../../../App';

afterEach(cleanup);

test('input test changes on typing', async () => {
  render(
    <Provider store={store}>
      <ContentFilters />
    </Provider>,
  );
  const searchInput: HTMLInputElement= screen.getByRole('textbox');
  await userEvent.type(searchInput, 'Hello');
  expect(searchInput.value).toBe('Hello');
});

test('search initation on pressing enter', async () => {
    renderWithProviders(<><CountriesContainer/><ContentFilters /></>)
  const searchInput = screen.getByRole('textbox');
  expect(screen.queryByText('United States')).not.toBeInTheDocument();
  await userEvent.type(searchInput, 'USA');
  await userEvent.keyboard('{Enter}');
  await waitFor(() => {
    expect(screen.getByText('United States')).toBeInTheDocument();
  });
});

test('search initation with debounce', async () => {

    renderWithProviders(<><CountriesContainer/><ContentFilters /></>)
 
  const searchInput = screen.getByRole('textbox');

  expect(screen.queryByText('United States')).not.toBeInTheDocument();
  await userEvent.type(searchInput, 'USA');
  await waitFor(
    () => {
      expect(screen.getByText('United States')).toBeInTheDocument();
    },
    { timeout: 3000 },
  );
});

test('change filter and hide popup by clicking on popup options', async () => {
  render(
    <Provider store={store}>
      <ContentFilters />
    </Provider>,
  );
  const filter = screen.getByText('Filter by Region');
  await userEvent.click(filter);
  const popup = screen.getByTestId('dropdownPopup');
  expect(popup).toBeInTheDocument();
  await userEvent.click(screen.getByText('Africa'));
  expect(popup).not.toBeInTheDocument();
  expect(screen.getByText('Africa')).toBeInTheDocument();
});
