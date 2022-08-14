import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

test('Changing header theme block on click', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  await userEvent.click(screen.getByText(/dark theme/i));
  expect(screen.getByText(/light theme/i)).toBeInTheDocument();
  expect(screen.getByTestId('app')).toHaveClass('light');
  await userEvent.click(screen.getByText(/light theme/i));
  expect(screen.getByText(/dark theme/i)).toBeInTheDocument();
  expect(screen.getByTestId('app')).not.toHaveClass('light');
});
