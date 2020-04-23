import React from 'react';

import Modal from '../basics/Modal';
import ErrorMessage from '../basics/ErrorMessage/index';
import Styled from './styles';

import useBoolToggler from '../../hooks/boolToggler';
import useInputField from '../../hooks/inputField';

import { useTranslation } from 'react-i18next';

const image = require('./register.png');

const getPlaceholderTranslations = t => {
  const inputsName = ['firstName', 'lastName', 'phone', 'address', 'email', 'password', 'confirmPassword'];
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
  const addressInput = useInputField();
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
      addressInput.reset();
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
    const addressInputHasError = addressInput.errorData.checkError();
    const emailInputHasError = emailInput.errorData.checkError();
    const passwordInputHasError = passwordInput.errorData.checkError();
    const confirmPasswordInputHasError = confirmPasswordInput.errorData.checkError();
    const passwordMissmatch = passwordInputHasError
      || confirmPasswordInputHasError
      || passwordInput.fieldData.value !== confirmPasswordInput.fieldData.value;

    if (
      firstNameInputHasError ||
      lastNameInputHasError ||
      addressInputHasError ||
      emailInputHasError ||
      passwordInputHasError ||
      confirmPasswordInputHasError ||
      passwordMissmatch
    ) {
      if (passwordMissmatch) {
        passwordInput.errorData.setHasErrorTrue();
        confirmPasswordInput.errorData.setHasErrorTrue();
      }
      setErrorMessageTrue();
      return;
    }
    setErrorMessageFalse();
    firstNameInput.errorData.setHasErrorFalse();
    lastNameInput.errorData.setHasErrorFalse();
    addressInput.errorData.setHasErrorFalse();
    emailInput.errorData.setHasErrorFalse();
    passwordInput.errorData.setHasErrorFalse();
    confirmPasswordInput.errorData.setHasErrorFalse();
    // TODO: register
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
                  {...addressInput.fieldData}
                  hasError={addressInput.errorData.value}
                  placeholder={placeholders.address}
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