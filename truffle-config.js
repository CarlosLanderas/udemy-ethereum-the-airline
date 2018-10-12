const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'unhappy clarify worth panther sibling sand almost usage pulp fun action toe';

module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/LtjZFi6C8XO0qkthtI7p"),
      network_id: 4
    }
  }
}