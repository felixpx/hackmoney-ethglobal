/* global window */
import verifyChainId from './verifyChainId';
import AbstractWeb3Connector from './AbstractWeb3Connector';

export const WalletConnectEvent = Object.freeze({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  DISCONNECT: 'disconnect',
    CONNECT: 'connect',

});

/**
 * Connector to connect an WalletConenct provider to Moralis
 * Note: this assumes using WalletConnect v1
 * // TODO: support WalletConnect v2
 */
class Web3ModalConnector extends AbstractWeb3Connector {
  type = 'Web3Modal';
/* constructor(_web3Modal){
  super();  
  this.web3Modal = _web3Modal;

  }*/
  async activate({ chainId: providedChainId,web3Modal:web3Modal } = {}) {
    

    // Cleanup old data if present to avoid using previous sessions
    try {
      await this.deactivate();
    } catch (error) {
      // Do nothing
    }

    if (!this.provider) {
        this.provider  = await web3Modal.connect();

    }

    if (!this.provider) {
      throw new Error('Could not connect with WalletConnect, error in connecting to provider');
    }

    const accounts = await this.provider.enable();
    const account = accounts[0].toLowerCase();
    const { chainId } = this.provider;
    const verifiedChainId = verifyChainId(chainId);

    this.account = account;
    this.chainId = verifiedChainId;

    this.subscribeToEvents(this.provider);

    return { provider: this.provider, account, chainId: verifiedChainId };
  }

  async deactivate() {
    this.unsubscribeToEvents(this.provider);

   

    this.account = null;
    this.chainId = null;

    if (this.provider) {
      try {
        await this.provider.disconnect();
      } catch {
        // Do nothing
      }
    }
  }

    async switchNetwork(chainId)  {
      await this.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
    
  };
}

export default Web3ModalConnector;