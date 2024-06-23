import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');
 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
 
// 弹出框组件
function AppModal({ isOpen, onRequestClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}
 
export default AppModal;

