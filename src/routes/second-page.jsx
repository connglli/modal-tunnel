import React from 'react';
import {
  Button,
} from 'antd';
import { connect } from 'dva';
import styles from './common.scss';

import Modal1 from '../components/second-page/modal1';
import Modal2 from '../components/second-page/modal2';
import ModalTunnel, { tunnel } from '../modal-tunnel';

tunnel({
  MODAL_21: Modal1,
  MODAL_22: Modal2
});

function SecondPage({ dispatch, modals }) {
  const openModal1 = () => {
    dispatch({
      type: 'modal_tunnel/sync_open',
      payload: {
        modalType: 'MODAL_21',
        modalProps: {
          title: 'This is modal 1',
          description: 'This is description of modal 1',
          onCancel: () => {
            dispatch({
              type: 'modal_tunnel/sync_close',
              payload: {
                modalType: 'MODAL_21',
              }
            });
          },
        },
      },
    });
  };

  const openModal2 = () => {
    dispatch({
      type: 'modal_tunnel/sync_open',
      payload: {
        modalType: 'MODAL_22',
        modalProps: {
          title: 'This is modal 2',
          description: 'This is description of modal 2',
          others: 'This is others of modal 2',
          onCancel: () => {
            dispatch({
              type: 'modal_tunnel/sync_close',
              payload: {
                modalType: 'MODAL_22',
              }
            });
          },
        },
      },
    });
  };

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to Second Page</h1>
      <ul className={styles.list}>
        <Button className={styles.button} onClick={openModal1}>open modal 1</Button>
        <Button className={styles.button} onClick={openModal2}>open modal 2</Button>
      </ul>
      <ModalTunnel
        modalType={modals.modalType}
        modalProps={modals.modalProps}
      />
    </div>
  )
}

export default connect(({ modal_tunnel }) => ({ modals: modal_tunnel }))(SecondPage)
