import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
      <App />
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ErrorBoundary when crashed', async () => {
  const { getByTestId } = render(
      <App />
  );
  expect(getByTestId('error')).toBeInTheDocument();
});
