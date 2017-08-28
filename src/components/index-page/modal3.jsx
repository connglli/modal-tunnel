import React from 'react';
import {
  Spin,
  Modal,
} from 'antd';

const Modal3 = ({ visible, loading, title, description, onCancel }) => (
  <Modal
    visible={visible}
    onCancel={onCancel}
  >
    {
      loading
        ? <Spin />
        : (<div>
          <h2>IndexPage: { title }</h2>
          <p>{ description }</p>
        </div>)
    }
  </Modal>
);

export default Modal3;
