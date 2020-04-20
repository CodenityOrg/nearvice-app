import React from 'react';
import { render } from '@testing-library/react';
import NavbarButtons from './index';
import { MemoryRouter } from 'react-router-dom';

test('renders sign in and sign up buttons if user is not authenticated', () => {
  const { getByText } = render(<MemoryRouter>
    <NavbarButtons onSignInClick={() => { }} onSignUpClick={() => { }} isAuth={false} t={key => key} />
  </MemoryRouter>);
  const signInButton = getByText('Sign In');
  const signUpButton = getByText('Sign Up');
  expect(signInButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

test('doesn\'t render sign in and sign up buttons if user is authenticated and renders avatar', () => {
  const { queryByText, getByTestId } = render(<MemoryRouter>
    <NavbarButtons onSignInClick={() => { }} onSignUpClick={() => { }} user={{ profilePicture: '' }} isAuth={true} t={key => key} />
  </MemoryRouter>);
  expect(queryByText('Sign In')).toBeNull()
  expect(queryByText('Sign Up')).toBeNull()
  expect(getByTestId('user-avatar')).toBeInTheDocument();
});
