require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.GOERLI_PRIVATE_KEY]
        }
    },
    paths: {
        artifacts: "./webapp/tokensftw/src/artifacts"
    }
    
    


};
