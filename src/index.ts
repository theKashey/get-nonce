let currentNonce: string | undefined;

export const setNonce = (nonce: string) => {
  currentNonce = nonce;
};

declare global {
  interface Window {
    __webpack_nonce__: string;
  }
}

export const getNonce = () => {
  // local value is most important
  if (currentNonce) {
    return currentNonce;
  }

  // build in webpack support
  if (typeof window.__webpack_nonce__ !== 'undefined') {
    return window.__webpack_nonce__;
  }

  // parcel does not support nonce by itself

  // rollup does not support nonce by itself

  return undefined;
};
