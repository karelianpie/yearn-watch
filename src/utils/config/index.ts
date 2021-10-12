import { Network, NetworkConfig } from '../../types';
import { mainnet } from './ethereum';
import { fantom } from './fantom';

const NETWORK_CONFIGS = new Map<Network, NetworkConfig>();
NETWORK_CONFIGS.set(Network.mainnet, mainnet);
NETWORK_CONFIGS.set(Network.fantom, fantom);

export default (network: Network): NetworkConfig => {
    if (!NETWORK_CONFIGS.has(network)) {
        throw new Error(`Network configuration not found for '${network}'`);
    }
    return NETWORK_CONFIGS.get(network) as NetworkConfig;
};
