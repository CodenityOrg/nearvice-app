
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BREAKPOINTS from '../../../utils/breakpoints';

const Navbar = styled.header`
    align-items: center;
    background-color: #2993DE;
    box-sizing: border-box;
    color: white;
    display: flex;
    height: 84px;
    padding: 16px 42px;
    
    @media (${BREAKPOINTS.MOBILE_ONLY}) {
        padding: 4px 24px;
        height: 66px;
    }
`;

const Brand = styled(Link)`
    align-items: center;
    color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 120px;

    @media (${BREAKPOINTS.MOBILE_ONLY}) {
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

    @media (${BREAKPOINTS.NOT_MOBILE}) {
        display: none;
    }
`;

const MenuButtonLine = styled.div`
    width: 90%;
    height: 2px;
    background-color: white;
`;

const Children = styled.div`
    align-items: center;
    color: white;
    display: flex;
    font-size: 1.5rem;
    justify-content: flex-end;
    text-decoration: none;
    width: 100%;

    @media (${BREAKPOINTS.MOBILE_ONLY}) {
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