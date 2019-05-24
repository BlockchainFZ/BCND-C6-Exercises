var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "congress smile pear deliver month confirm asset wedding merit property pitch demise";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545",0,50);
      },
      network_id: '*',
      gas: 1999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};
