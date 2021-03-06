
import styled from 'styled-components';

const baseStyles = `
    background-color: #FDFDFD;
    box-shadow: 0px 10px 20px #0000001A;
    border-radius: 8px;
    opacity: 1;
    text-align: left;
    font-size: 12px;
    font-family: Lato;
    letter-spacing: 0;
    padding: 0 18px;
    width: 230px;
    height: 35px;
    outline: none;
    background: white;
    border: none;
    ${props => props.hasError && 'border: 1px solid red;'}
`;

export default {
    Input: styled.input`${baseStyles}`
}; 