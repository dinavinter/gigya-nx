import { GigyaStore } from './js';
import {describe, expect, it} from 'vitest';
describe('js', () => {
  it('should work', () => {
    expect(new GigyaStore()).toBeDefined();
  });
});
