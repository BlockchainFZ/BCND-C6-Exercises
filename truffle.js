var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "garbage hybrid artist dwarf gain child segment shield slim stay token album";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/");
      },
      network_id: '*',
      //gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};
