export default {
  namespace: 'modal_tunnel',
  state: {
    modalType: '',
    modalProps: {},
  },
  reducers: {
    sync_open(state, { payload }) {
      if (state.modalType !== '') {
        console.warn(`${state.modalType} is opening, now close ${state.modalType} and open ${payload.modalType}`);
      }

      return {
        modalType: payload.modalType,
        modalProps: {
          ...payload.modalProps,
          visible: true,
        },
      };
    },
    sync_close(state, { payload }) {
      if (state.modalType === '') {
        console.warn('No modal is opening');
      } else if (!payload) {
        console.warn(`It would be better if the closing modal was assigned, now we close ${state.modalType}`);
      } else if (payload.modalType !== state.modalType) {
        console.warn(`${state.modalType} is opening, not ${payload.modalType}, now close ${state.modalType}`);
      }

      return {
        modalType: '',
        modalProps: {},
      };
    },
    set_props(state, { payload }) {
      if (state.modalType === '') {
        console.warn('No modal is opening');
        return state;
      } else if (!payload || !payload.modalType) {
        console.warn('No modalType was assigned');
        return state;
      } else if (payload.modalType !== state.modalType) {
        console.warn(`${state.modalType} is opening, you can not set props to ${payload.modalType}`);
        return state;
      }

      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          ...payload.modalProps,
        },
      };
    },
  },
};
