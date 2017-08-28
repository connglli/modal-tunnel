import React from 'react';
import {
  Modal,
} from 'antd';

const Modal1 = ({ visible, title, description, onCancel }) => (
  <Modal
    visible={visible}
    onCancel={onCancel}
  >
    <h2>SecondPage: { title }</h2>
    <span>{ description }</span>
  </Modal>
);

export default Modal1;
