import { getNonce, setNonce } from '../src';

describe('node', () => {
  afterEach(() => setNonce(undefined as any));

  it('nothing', () => {
    expect(getNonce()).toBe(undefined);
  });
  it('get what I set', () => {
    setNonce('this-is-it');
    expect(getNonce()).toBe('this-is-it');
  });
  it('nothing, again', () => {
    expect(getNonce()).toBe(undefined);
  });
});
