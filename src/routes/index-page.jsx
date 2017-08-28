import React from 'react';
import {
  Button,
} from 'antd';
import { connect } from 'dva';
import styles from './common.scss';

import Modal1 from '../components/index-page/modal1';
import Modal2 from '../components/index-page/modal2';
import Modal3 from '../components/index-page/modal3';
import ModalTunnel, { tunnel } from '../modal-tunnel/index';

tunnel({
  MODAL_11: Modal1,
  MODAL_12: Modal2,
  MODAL_13: Modal3
});

function IndexPage({ dispatch, modals }) {
  const openModal1 = () => {
    dispatch({
      type: 'modal_tunnel/sync_open',
      payload: {
        modalType: 'MODAL_11',
        modalProps: {
          title: 'This is modal 1',
          description: 'This is description of modal 1',
          onCancel: () => {
            dispatch({
              type: 'modal_tunnel/sync_close',
              payload: {
                modalType: 'MODAL_11',
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
        modalType: 'MODAL_12',
        modalProps: {
          title: 'This is modal 2',
          description: 'This is description of modal 2',
          others: 'This is others of modal 2',
          onCancel: () => {
            dispatch({
              type: 'modal_tunnel/sync_close',
              payload: {
                modalType: 'MODAL_12',
              }
            });
          },
        },
      },
    });
  };

  const openModal3 = () => {
    dispatch({
      type: 'example/fetch_all',
      dispatch, // TODO we have to pass dispatch to effects manually
    });
  };

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to Index Page</h1>
      <ul className={styles.list}>
        <Button className={styles.button} onClick={openModal1}>open modal 1</Button>
        <Button className={styles.button} onClick={openModal2}>open modal 2</Button>
        <Button className={styles.button} onClick={openModal3}>open modal 3</Button>
      </ul>
      <ModalTunnel
        modalType={modals.modalType}
        modalProps={modals.modalProps}
      />
    </div>
  )
}

export default connect(({ modal_tunnel }) => ({ modals: modal_tunnel }))(IndexPage)
