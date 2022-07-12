import { AstarDomainSDK } from '../../../src/types';
import { getAstrDomainSDK } from '../../../src';
import { CONTRACT_OWNER, DOMAIN } from '../../utils/data';
import { defaultKeys } from '../../../src/utils/defaults';

describe('getOwner', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return owner infomation without metadata', async () => {
    const ownerInfo = await sdk.getOwner({ domain: DOMAIN, hasMetadata: false });

    expect(ownerInfo.owner).toBe(CONTRACT_OWNER);
    expect(ownerInfo.native).toBe('');
    expect(ownerInfo.metadata.length).toBe(0);
  });

  test('should return owner infomation with metadata', async () => {
    const ownerInfo = await sdk.getOwner({ domain: DOMAIN, hasMetadata: true });

    expect(ownerInfo.owner).toBe(CONTRACT_OWNER);
    expect(ownerInfo.native).toBe('');
    expect(ownerInfo.metadata.length).toBe(9);
    expect(ownerInfo.metadata[0].key).toBe(defaultKeys[0]);
    expect(ownerInfo.metadata[0].value).toBe('');
    expect(ownerInfo.metadata[1].key).toBe(defaultKeys[1]);
    expect(ownerInfo.metadata[1].value).toBe('');
    expect(ownerInfo.metadata[2].key).toBe(defaultKeys[2]);
    expect(ownerInfo.metadata[2].value).toBe('');
    expect(ownerInfo.metadata[3].key).toBe(defaultKeys[3]);
    expect(ownerInfo.metadata[3].value).toBe('');
    expect(ownerInfo.metadata[4].key).toBe(defaultKeys[4]);
    expect(ownerInfo.metadata[4].value).toBe('');
    expect(ownerInfo.metadata[5].key).toBe(defaultKeys[5]);
    expect(ownerInfo.metadata[5].value).toBe('');
    expect(ownerInfo.metadata[6].key).toBe(defaultKeys[6]);
    expect(ownerInfo.metadata[6].value).toBe('');
    expect(ownerInfo.metadata[7].key).toBe(defaultKeys[7]);
    expect(ownerInfo.metadata[7].value).toBe('');
    expect(ownerInfo.metadata[8].key).toBe(defaultKeys[8]);
    expect(ownerInfo.metadata[8].value).toBe('');
  });

  test('should throw if no owner found', async () => {
    await expect(sdk.getOwner({ domain: 'aaaaaaaaaaaaaa', hasMetadata: false })).rejects.toEqual(
      new Error('Failed to fetch the owner address'),
    );
  });
});
