import React from 'react';
import { render } from '@testing-library/react';
import NavbarButtons from './index';
import { MemoryRouter } from 'react-router-dom';

test('renders sign in and sign up buttons if user is not authenticated', () => {
  const { getByText } = render(<MemoryRouter>
    <NavbarButtons onSignInClick={() => { }} onSignUpClick={() => { }} isAuth={false} t={key => key} />
  </MemoryRouter>);
  expect(getByText(/sign in/i)).toBeInTheDocument();
  expect(getByText(/sign up/i)).toBeInTheDocument();
});

test('doesn\'t render sign in and sign up buttons if user is authenticated and renders avatar', () => {
  const { queryByText, getByTestId } = render(<MemoryRouter>
    <NavbarButtons onSignInClick={() => { }} onSignUpClick={() => { }} user={{ profilePicture: '' }} isAuth={true} t={key => key} />
  </MemoryRouter>);
  expect(queryByText(/sign in/i)).toBeNull()
  expect(queryByText(/sign up/i)).toBeNull()
  expect(getByTestId('user-avatar')).toBeInTheDocument();
});
