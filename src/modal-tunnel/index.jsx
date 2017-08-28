import React from 'react';

const __MODAL_MAPPING = {};

// ModalTunnel is used to extract the required modal
const ModalTunnel = ({ modalType, modalProps }) => {
  const SpecificModal = __MODAL_MAPPING[modalType];

  if (SpecificModal) {
    return <SpecificModal {...modalProps} />;
  }

  if (modalType) {
    console.warn(`${modalType} is not tunneled`);
  }

  return null;
};

// tunnel is a function used to connect your customized
// modal with ModalTunnel
export const tunnel = mappings => {
  if (mappings) {
    for (let type in mappings) { // eslint-disable-line
      let modal = mappings[type];

      if (type in __MODAL_MAPPING) {
        console.warn(`Tunnel to [${type}] will be covered from ${__MODAL_MAPPING[type]} to ${modal}`);
      }

      __MODAL_MAPPING[type] = modal;
    }
  }
};

export default ModalTunnel;
