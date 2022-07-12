import { AstarDomainSDK } from '../../../src/types';
import { getAstrDomainSDK } from '../../../src/getAstrDomainSDK';
import { CONTRACT_ADDRESS, CONTRACT_OWNER } from '../../utils/data';

describe('getDomains', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return domains', async () => {
    const domains = await sdk.getDomains(CONTRACT_OWNER);

    expect(domains.length).toEqual(3);
    expect(domains[2]).toEqual('i❤y.astr');
  });

  test('should throw if no domains', async () => {
    await expect(sdk.getDomains(CONTRACT_ADDRESS)).rejects.toEqual(new Error('Failed to fetch domains'));
  });
});
