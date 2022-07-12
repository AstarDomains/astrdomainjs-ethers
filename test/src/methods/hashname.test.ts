import { AstarDomainSDK } from '../../../src/types';
import { getAstrDomainSDK } from '../../../src';
import { DOMAIN } from '../../utils/data';
import { BigNumber } from 'ethers';

// i❤y.astr Token id
const HASH_NAME = '10509600270561405020304926018840922148715281763402749920984600268237978157814';

describe('hashname', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return hashname', async () => {
    const hashname = await sdk.hashname(DOMAIN);
    expect(hashname).toEqual(BigNumber.from(HASH_NAME));
  });
});
