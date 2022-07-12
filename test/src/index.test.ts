import { getAstrDomainSDK } from '../../src/getAstrDomainSDK';
import { defaultConfig } from '../../src/utils/defaults';
import { ConfigType } from '../../src/types';

// TODO: create local deployment env for testing
describe('AstrDomainSDK', () => {
  test('should get AstrDomainSDK', async () => {
    const sdk = await getAstrDomainSDK(defaultConfig);
    expect(sdk).not.toBeNull();
    expect(sdk.balanceOf).not.toBeFalsy();
    expect(sdk.getOwner).not.toBeFalsy();
    expect(sdk.getDomain).not.toBeFalsy();
    expect(sdk.getDomains).not.toBeFalsy();
    expect(sdk.getMetadata).not.toBeFalsy();
    expect(sdk.getMetadatas).not.toBeFalsy();
    expect(sdk.hashname).not.toBeFalsy();
  });

  test('should throw if rpcURL is undefined', async () => {
    const config: ConfigType = {
      ...defaultConfig,
      testnet: {
        rpcUrl: undefined,
        contractAddress: '0xA1019535E6b364523949EaF45F4B17521c1cb074',
      },
      defaultNetwork: 'testnet',
    };

    await expect(getAstrDomainSDK(config)).rejects.toEqual(
      new Error('Both rpcUrl and contractAddress must be provided'),
    );
  });

  test('should throw if contractAddress is undefined', async () => {
    const config: ConfigType = {
      ...defaultConfig,
      testnet: {
        rpcUrl: 'https://rpc.astar.network:8545',
        contractAddress: undefined,
      },
      defaultNetwork: 'testnet',
    };

    await expect(getAstrDomainSDK(config)).rejects.toEqual(
      new Error('Both rpcUrl and contractAddress must be provided'),
    );
  });
});
