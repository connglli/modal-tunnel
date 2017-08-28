import React from 'react';
import {
  Spin,
  Modal,
} from 'antd';

const Modal3 = ({ visible, loading, title, description, others, onCancel }) => (
  <Modal
    visible={visible}
    onCancel={onCancel}
  >
    {
      loading
      ? <Spin />
      : (<div>
          <h2>SecondPage: { title }</h2>
          <p>{ description }</p>
          <p>{ others }</p>
        </div>)
    }

  </Modal>
);

export default Modal3;
