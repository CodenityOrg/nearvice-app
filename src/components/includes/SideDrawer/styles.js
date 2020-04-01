import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideDrawer = styled.div`
    position: fixed;
    width: 230px;
    color: white;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #448DC1;
    padding: 0;
    box-sizing: border-box;
    transition: transform .3s ease-out;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});

    @media(min-width: 461px) {
        display: none;
    }
`;

const Nav = styled.nav`
    outline: none;
`;

const Logo = styled(Link)`
    align-items: center;
    color: white;
    display: flex;
    height: 105px;
    justify-content: center;
    margin-bottom: 26px;
    text-transform: uppercase;
    text-decoration: none;
`;

const Bottom = styled.div`
    background-color: #2993DE;
    bottom: 0;
    position: absolute;
    height: 130px;
    left: 0;
    right: 0;
`;

export default {
    Bottom,
    SideDrawer,
    Logo,
    Nav
}