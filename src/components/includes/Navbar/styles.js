
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.header`
    align-items: center;
    background-color: #2993DE;
    box-sizing: border-box;
    color: white;
    display: flex;
    height: 84px;
    justify-content: space-between;
    padding: 16px 42px;
    
    @media (max-width: 460px) {
        padding: 4px 24px;
        height: 66px;
    }
`;

const Brand = styled(Link)`
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: white;

    @media (max-width: 460px) {
        display: none;
    }
`;

const MenuButton = styled.div`
    width: 25px;
    height: 21px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;

    @media (min-width: 461px) {
        display: none;
    }
`;

const MenuButtonLine = styled.div`
    width: 90%;
    height: 2px;
    background-color: white;
`;

const Children = styled(Link)`
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: white;

    @media (max-width: 460px) {
        display: none;
    }
`;

export default {
    Brand,
    Children,
    Navbar,
    MenuButton,
    MenuButtonLine
}