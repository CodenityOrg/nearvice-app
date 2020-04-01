import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.div`
    font-size: 1.5rem;
    line-heigth: 1.5rem;
    padding: 8px;
    box-sizing: border-box;

    :hover {
        cursor: pointer;
    }
    
    :focus {
        outline: none;
    }

    :focus,
    :active {
        background-color: #4687b5;
    }

    @media (max-width: 460px) {
        font-size: 1rem;
        line-height: 1rem;
        padding: 14px 0 14px 34px;
        width: 100%;
    }
`;

const MobileLink = styled(Button).attrs({
    as: Link
})`
    color: white;
    display: block;
    text-decoration: none;

    @media (min-width: 461px) {
        display: none;
    }
`;

const User = styled.div`
    aling-items: center;
    displat: flex;
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 8px;

    :hover {
        cursor: pointer;
    }
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-right: 16px;
`;

export default {
    Avatar,
    Button,
    User,
    MobileLink
};