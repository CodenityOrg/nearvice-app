import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 14px;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    margin: 0 0 10px 0;
`;

const Image = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin-right: 12px;
`

export default {
    Container,
    Image,
    Title
}