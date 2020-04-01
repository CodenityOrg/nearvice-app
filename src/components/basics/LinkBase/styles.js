import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkBase = styled(Link)`
    color: white;
    text-decoration: none;
    
    :visited {
        color: white;
    }
`;

export default {
    LinkBase
};