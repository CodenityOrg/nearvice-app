
import styled from 'styled-components';

const Link = styled.a`
    font-size: 1.5rem;
    padding: 8px;

    :hover {
        cursor: pointer;
    }
`;

const User = styled.div`
    aling-items: center;
    displat: flex;
    font-size: 1.5rem;
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
    Link,
    User,
    Avatar
}