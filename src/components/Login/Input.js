import styled from 'styled-components';
import Input from '../basics/Input/index';

export default styled(Input)`
    margin: 5px 0px;
    ${props => props.hasError && 'border: 1px solid red;'}
`;
