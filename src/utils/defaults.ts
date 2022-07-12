import { ConfigType } from '../types';

export const defaultConfig: ConfigType = {
  testnet: {
    rpcUrl: undefined,
    contractAddress: undefined,
  },
  mainnet: {
    rpcUrl: 'https://rpc.astar.network:8545',
    contractAddress: '0xA1019535E6b364523949EaF45F4B17521c1cb074',
  },
  defaultNetwork: 'mainnet',
};

export const defaultKeys = [
  'avatar',
  'cover',
  'website',
  'email',
  'social:twitter',
  'social:facebook',
  'social:telegram',
  'social:discord',
  'social:instagram',
] as const;
