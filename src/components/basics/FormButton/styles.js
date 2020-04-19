
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 50px;
    background: ${props => props.disabled ? 'gray' : '#0073B1'};
    color: white;
    border: none;
    align-items: center;
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    box-shadow: 5px 3px 6px #00000029;
    border-radius: 5px;
    
    :hover {
        background: ${props => props.disabled ? 'gray' : '#006398' };
    }
`;

export default {
    Button
}