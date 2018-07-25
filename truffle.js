var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "paper heart struggle name split alpha math garlic link helmet mutual wasp"
module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNkOTUyOWQxZDVhZTRkNGFhN2JjNzI3MzBiZjNjNzZhIiwiaWF0IjoxNTMyNTA0NjkxfQ.00K4CKwY1W5qwhUHyqR_ksjpLOnBoGCkYcobZK73DOc")
      },
      network_id: 3,
      gas:"2700000"
    }  
  }
};