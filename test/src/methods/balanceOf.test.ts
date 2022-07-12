import { AstarDomainSDK } from '../../../src/types';
import { getAstrDomainSDK } from '../../../src/getAstrDomainSDK';
import { CONTRACT_OWNER } from '../../utils/data';
import { BigNumber } from 'ethers';

describe('balanceOf', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return balance 1', async () => {
    const balance = await sdk.balanceOf(CONTRACT_OWNER);
    expect(balance).toEqual(BigNumber.from(3));
  });
});
