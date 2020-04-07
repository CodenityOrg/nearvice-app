import styled from "styled-components";

export default styled.button`
    width: 100%;
    height: 54px;
    background: ${props => props.disabled? 'gray' : '#0073B1' };
    color: white;
    border: none;
    align-items: center;
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    cursor: ${props => props.disabled? 'not-allowed' : 'pointer'};
    
    :hover {
        background: ${props => props.disabled? 'gray' : '#006398' };
    }
`;