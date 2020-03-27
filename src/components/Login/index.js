import styled from 'styled-components';

import AdSection from './Sections/Ad';
import LoginSection from './Sections/Login';

import OAuth from './Oauth';
import Signin from './Signin';
import Input from './Input';
import Button from './Button';
import Text from './Text';
import Image from './Image';


const Login = styled.div`
    display: flex;
    flex: 1;
`;

Login.AdSection = AdSection;
Login.LoginSection = LoginSection;

Login.OAuth = OAuth;
Login.Signin = Signin;
Login.Input = Input;
Login.Button = Button;
Login.Text = Text;
Login.Image = Image;

export default Login;
