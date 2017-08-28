import React from 'react';
import {
  Modal,
} from 'antd';

const Modal2 = ({ visible, title, description, others, onCancel }) => (
  <Modal
    visible={visible}
    onCancel={onCancel}
  >
    <h2>IndexPage: { title }</h2>
    <p>{ description }</p>
    <p>{ others }</p>
  </Modal>
);

export default Modal2;
