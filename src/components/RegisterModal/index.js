import React from 'react';

import Modal from '../basics/Modal';
import ErrorMessage from '../basics/ErrorMessage/index';
import Styled from './styles';

import useBoolToggler from '../../hooks/boolToggler';
import useInputField from '../../hooks/inputField';

import { useTranslation } from 'react-i18next';

import { register } from '../../api';

const image = require('./register.png');

const getPlaceholderTranslations = t => {
  const inputsName = ['firstName', 'lastName', 'phone', 'country', 'city', 'email', 'password', 'confirmPassword'];
  const placeholders = {};
  for (const inputName of inputsName) {
    placeholders[inputName] = t(`form.placeholder.${inputName}`)
  }
  return placeholders;
}

export default (props) => {
  const { isOpen } = props;
  const firstNameInput = useInputField();
  const lastNameInput = useInputField();
  const phoneInput = useInputField();
  const countryInput = useInputField();
  const cityInput = useInputField();
  const emailInput = useInputField('email');
  const passwordInput = useInputField('password');
  const confirmPasswordInput = useInputField('password');

  const [hasErrorMessage, setErrorMessageTrue, setErrorMessageFalse] = useBoolToggler();

  const { t } = useTranslation();
  //const errorMessage = t('error.default');
  const errorMessage = t('error.validation');
  const title = t('registerModal.text.title');
  const subtitle = t('registerModal.text.subtitle');
  const registerText = t('register');

  const placeholders = getPlaceholderTranslations(t);

  React.useEffect(() => {
    if (!isOpen) {
      firstNameInput.reset();
      lastNameInput.reset();
      phoneInput.reset();
      countryInput.reset();
      cityInput.reset();
      emailInput.reset();
      passwordInput.reset();
      confirmPasswordInput.reset();
      setErrorMessageFalse();
    }
  }, [isOpen]);

  const handleRegister = event => {
    event.preventDefault();
    const firstNameInputHasError = firstNameInput.errorData.checkError();
    const lastNameInputHasError = lastNameInput.errorData.checkError();
    const emailInputHasError = emailInput.errorData.checkError();
    const passwordInputHasError = passwordInput.errorData.checkError();
    const confirmPasswordInputHasError = confirmPasswordInput.errorData.checkError();
    const passwordMissmatch = passwordInputHasError
      || confirmPasswordInputHasError
      || passwordInput.fieldData.value !== confirmPasswordInput.fieldData.value;
    if (
      firstNameInputHasError ||
      lastNameInputHasError ||
      emailInputHasError ||
      passwordInputHasError ||
      confirmPasswordInputHasError ||
      passwordMissmatch
    ) {
      setErrorMessageFalse();
      firstNameInput.errorData.setHasErrorFalse();
      lastNameInput.errorData.setHasErrorFalse();
      countryInput.errorData.setHasErrorFalse();
      cityInput.errorData.setHasErrorFalse();
      emailInput.errorData.setHasErrorFalse();
      passwordInput.errorData.setHasErrorFalse();
      confirmPasswordInput.errorData.setHasErrorFalse();
      return;
    }
    if (passwordMissmatch) {
      passwordInput.errorData.setHasErrorTrue();
      confirmPasswordInput.errorData.setHasErrorTrue();
    }
    const name = firstNameInput.fieldData.value.trim();
    const lastname = lastNameInput.fieldData.value.trim();
    const phone = phoneInput.fieldData.value.trim();
    const country = countryInput.fieldData.value.trim();
    const city = cityInput.fieldData.value.trim();
    const email = emailInput.fieldData.value.trim();
    const password = passwordInput.fieldData.value.trim();

    setErrorMessageTrue();
    const data = {
      name,
      lastname,
      phone,
      country,
      city,
      email,
      password,
    };
    register(data)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={props.closeModal}
      >
        <Styled>
          <ErrorMessage
            show={hasErrorMessage}
            message={errorMessage}
            onClick={setErrorMessageFalse}
          />
          <Styled.LeftColumn>
            <Styled.Title>
              {title}
            </Styled.Title>
            <Styled.Image src={image} alt=" " />
            <Styled.Subtitle>
              {subtitle}
            </Styled.Subtitle>
          </Styled.LeftColumn>
          <Styled.RightColumn>
            <form onSubmit={handleRegister}>
              <Styled.InputContainer>
                <Styled.Input
                  {...firstNameInput.fieldData}
                  hasError={firstNameInput.errorData.value}
                  placeholder={placeholders.firstName}
                />
                <Styled.Input
                  {...lastNameInput.fieldData}
                  hasError={lastNameInput.errorData.value}
                  placeholder={placeholders.lastName}
                />
                <Styled.Input
                  {...phoneInput.fieldData}
                  hasError={phoneInput.errorData.value}
                  placeholder={placeholders.phone}
                />
                <Styled.Input
                  {...countryInput.fieldData}
                  hasError={countryInput.errorData.value}
                  placeholder={placeholders.country}
                />
                <Styled.Input
                  {...cityInput.fieldData}
                  hasError={cityInput.errorData.value}
                  placeholder={placeholders.city}
                />
                <Styled.Input
                  {...emailInput.fieldData}
                  hasError={emailInput.errorData.value}
                  placeholder={placeholders.email}
                />
                <Styled.Input
                  {...passwordInput.fieldData}
                  hasError={passwordInput.errorData.value}
                  placeholder={placeholders.password}
                />
                <Styled.Input
                  {...confirmPasswordInput.fieldData}
                  hasError={confirmPasswordInput.errorData.value}
                  placeholder={placeholders.confirmPassword}
                />
              </Styled.InputContainer>
              <Styled.Button type="submit">{registerText}</Styled.Button>
            </form>
          </Styled.RightColumn>
        </Styled>
      </Modal>
    </>
  );
};