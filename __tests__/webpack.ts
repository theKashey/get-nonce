import { getNonce, setNonce } from '../src';

describe('webpack nonce', () => {
  beforeEach(() => {
    (global as any).__webpack_nonce__ = 'webpack-nonce';
  });

  it('get value from webpack', () => {
    expect(getNonce()).toBe('webpack-nonce');
  });

  it('get what I set', () => {
    setNonce('this-is-it');
    expect(getNonce()).toBe('this-is-it');
  });

  it('get value from webpac again', () => {
    setNonce(undefined as any);
    expect(getNonce()).toBe('webpack-nonce');
  });
});
