import React from 'react';

import Modal from '../basics/Modal';
import ErrorMessage from '../basics/ErrorMessage/index';
import Styled from './styles';

import useBoolToggler from '../../hooks/boolToggler';
import useInputField from '../../hooks/inputField';

import { useTranslation } from 'react-i18next';

const image = require('./register.png');

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
  const firstNamePlaceholder = t('form.placeholder.firstName');
  const lastNamePlaceholder = t('form.placeholder.lastName');
  const phonePlaceholder = t('form.placeholder.phone');
  const addressPlaceholder = t('form.placeholder.address');
  const emailPlaceholder = t('form.placeholder.email');
  const passwordPlaceholder = t('form.placeholder.password');
  const confirmPasswordPlaceholder = t('form.placeholder.confirmPassword');

  const registerText = t('register');

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
                  placeholder={firstNamePlaceholder}
                />
                <Styled.Input
                  {...lastNameInput.fieldData}
                  hasError={lastNameInput.errorData.value}
                  placeholder={lastNamePlaceholder}
                />
                <Styled.Input
                  {...phoneInput.fieldData}
                  hasError={phoneInput.errorData.value}
                  placeholder={phonePlaceholder}
                />
                <Styled.Input
                  {...addressInput.fieldData}
                  hasError={addressInput.errorData.value}
                  placeholder={addressPlaceholder}
                />
                <Styled.Input
                  {...emailInput.fieldData}
                  hasError={emailInput.errorData.value}
                  placeholder={emailPlaceholder}
                />
                <Styled.Input
                  {...passwordInput.fieldData}
                  hasError={passwordInput.errorData.value}
                  placeholder={passwordPlaceholder}
                />
                <Styled.Input
                  {...confirmPasswordInput.fieldData}
                  hasError={confirmPasswordInput.errorData.value}
                  placeholder={confirmPasswordPlaceholder}
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