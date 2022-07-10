import { AstarDomainSDK } from '../../../types';
import { getAstrDomainSDK } from '../../../src';
import { CONTRACT_OWNER, TEST_ACCOUNT } from '../../utils/data';

describe('getDomain', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return domain', async () => {
    const domain = await sdk.getDomain(TEST_ACCOUNT);
    expect(domain).toEqual('test1.astr');
  });

  test('should throw if default domain is not set', async () => {
    await expect(sdk.getDomain(CONTRACT_OWNER)).rejects.toEqual(new Error('Failed to fetch a default domain'));
  });
});
