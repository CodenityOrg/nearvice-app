import styled from 'styled-components';

//TODO: Add more breakpoints for other devices
export default styled.div`
    width: 294px;
    height: 332px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #055E9D;
    
    @media (max-width: 768px) {
        display: none;
    }
    
`;
