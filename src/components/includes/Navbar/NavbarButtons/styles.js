import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BREAKPOINTS from '../../../../utils/breakpoints';

const Button = styled.div`
    box-sizing: border-box;
    border-radius: 5px;
    display: inline-block;
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 14px 50px;
    margin-left: 8px;
    ${props => props.highlighted && 'background-color: #006AAE;'}

    :hover {
        cursor: pointer;
    }
    
    :focus {
        outline: none;
    }

    :focus,
    :active {
        background-color: ${props => props.highlighted ? '#097dc7' : '#4687b5'};
    }

    @media (${BREAKPOINTS.MOBILE_ONLY}) {
        font-size: 1rem;
        line-height: 1rem;
        padding: 14px 0 14px 34px;
        margin: 0;
        width: 100%;
    }
`;

const ButtonLink = styled(Button).attrs({
    as: Link
})`
    color: white;
    text-decoration: none;
`;

const ButtonLinkMobile = styled(ButtonLink)`
    @media (${BREAKPOINTS.NOT_MOBILE}) {
        display: none;
    }
`;

const ButtonLinkLeft = styled(ButtonLink)`
    margin-left: 0;
    margin-right: auto;
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
    ButtonLink,
    ButtonLinkLeft,
    ButtonLinkMobile
};