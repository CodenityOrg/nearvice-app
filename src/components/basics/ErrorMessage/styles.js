
import styled from 'styled-components';

export default {
  ErrorMessage: styled.div`
    background-color: #F35B5B;
    box-shadow: 0px 5px 6px #00000029;
    border-radius: 4px;
    color: #fff;
    opacity: ${props => props.show ? '1' : '0'};
    padding: 18px;
    min-width: 480px;
    transition: opacity .3s ease, transform .5s ease;
    transform: translate(-50%, -${props => props.show ? '110' : '120'}%);
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    will-change: transform, opacity;
    z-index: 999;

    @media (max-width: 768px) {
      min-width: 90vw;
    }
  `
}; 