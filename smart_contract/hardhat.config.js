//1:31:40
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/7eUjpELt4ZQlrRKG0_x-sM4cA6j8q-J5",
      accounts: [
        "1cfa15c89e4bfaf396ca1533f1d08230514afd6dfae39d77c6a4cce21b990ba7",
      ],
    },
  },
};
