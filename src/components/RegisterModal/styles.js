import styled from 'styled-components';

import Input from '../basics/Input';
import FormButton from '../basics/FormButton';

import BREAKPOINTS from '../../utils/breakpoints';

const Register = styled.div`
  display: flex;
`;

const Column = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  text-align: center;
  height: 460px;
  max-width: 95vw;
`;

const LeftColumn = styled(Column)`
  flex: 0 0 340px;
  width: 340px;

  @media (${BREAKPOINTS.MOBILE_ONLY}) {
    display: none;
  }
`;

const RightColumn = styled(Column)`
  flex: 0 0 330px;
  width: 330px;
  background-color: #2EA6FA;
`;

const Title = styled('h2')`
  font: Bold 36px/48px Lato;
  color: #3C3C3C;
  margin: 0;
`;

const Subtitle = styled('h3')`
  font: Bold 26px/36px Lato;
  color: #3C3C3C;
  margin: 0;
`;

const Image = styled('img')`
  margin: 26px 0;
`;

const InputContainer = styled('div')`
  width: 100%;
  padding: 0 16px;
`;

const RegisterInput = styled(Input)`
  margin-bottom: 15px;
  width: 100%;
  ${props => props.hasError && 'border: 1px solid red;'}
`;

const Button = styled(FormButton)`
  margin-top: 5px;
`;

Register.LeftColumn = LeftColumn;
Register.RightColumn = RightColumn;
Register.Title = Title;
Register.Subtitle = Subtitle;
Register.Image = Image;
Register.InputContainer = InputContainer;
Register.Input = RegisterInput;
Register.Button = Button;

export default Register;
