import {
  fetchAll,
} from '../service/example';

export default {
  namespace: 'example',
  state: {

  },
  reducers: {

  },
  effects: {
    * fetch_all(payload, { put, call }) {
      // open modal
      yield put({
        type: 'modal_tunnel/sync_open',
        payload: {
          modalType: 'MODAL_13',
          modalProps: {
            loading: true,
            onCancel: () => {
              //
              // TODO Not elegant
              // we cannot access put here, so we have to use
              // dispatch passed from payload, this is not ele-
              // gant, but we have to do this by now
              //
              payload.dispatch({
                type: 'modal_tunnel/sync_close',
                payload: {
                  modalType: 'MODAL_13',
                }
              });
            },
          }
        }
      });

      let ret = yield call(fetchAll);

      // reset data
      yield put({
        type: 'modal_tunnel/set_props',
        payload: {
          modalType: 'MODAL_13',
          modalProps: {
            loading: false,
            title: ret.data.title,
            description: ret.data.description,
          },
        },
      })
    }
  },
};
