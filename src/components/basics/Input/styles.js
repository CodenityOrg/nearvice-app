
import styled from 'styled-components';

const baseStyles = `
    background: #FDFDFD 0% 0% no-repeat padding-box;
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
`;

export default {
    Input: styled.input`${baseStyles}`
}; 