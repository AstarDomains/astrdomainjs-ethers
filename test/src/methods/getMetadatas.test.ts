import { AstarDomainSDK } from '../../../types';
import { getAstrDomainSDK } from '../../../src';
import { DOMAIN } from '../../utils/data';
import { defaultKeys } from '../../../src/utils/defaults';

describe('getMetadatas', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return metadatas', async () => {
    const keys = [...defaultKeys];
    const metadatas = await sdk.getMetadatas({ keys, domain: DOMAIN });
    expect(metadatas.length).toBe(9);
    expect(metadatas[0].key).toBe(keys[0]);
    expect(metadatas[0].value).toBe('');
    expect(metadatas[1].key).toBe(keys[1]);
    expect(metadatas[1].value).toBe('');
    expect(metadatas[2].key).toBe(keys[2]);
    expect(metadatas[2].value).toBe('');
    expect(metadatas[3].key).toBe(keys[3]);
    expect(metadatas[3].value).toBe('');
    expect(metadatas[4].key).toBe(keys[4]);
    expect(metadatas[4].value).toBe('');
    expect(metadatas[5].key).toBe(keys[5]);
    expect(metadatas[5].value).toBe('');
    expect(metadatas[6].key).toBe(keys[6]);
    expect(metadatas[6].value).toBe('');
    expect(metadatas[7].key).toBe(keys[7]);
    expect(metadatas[7].value).toBe('');
    expect(metadatas[8].key).toBe(keys[8]);
    expect(metadatas[8].value).toBe('');
  });
});
