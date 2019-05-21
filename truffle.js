var HDWalletProvider = require("truffle-hdwallet-provider");

// Be sure to match this mnemonic with that in Ganache!
var mnemonic = "garbage hybrid artist dwarf gain child segment shield slim stay token album";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 10);
      },
      network_id: '*',
      //gas: 9999999
    }
  }
};
