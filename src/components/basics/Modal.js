import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';


ReactModal.setAppElement('#root')

const customStyles = {
  content: {
    border: 'none',
    boxShadow: '0px 5px 6px #00000029',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    transition: 'opacity 300ms ease-in-out',
    opacity: 0
  },
};

const Modal = props => (
  <ReactModal
    style={customStyles}
    contentLabel="modal"
    {...props}
  >{props.children}</ReactModal>
);

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;