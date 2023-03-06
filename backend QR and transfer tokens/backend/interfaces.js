/* const { Alchemy, Network } = require('alchemy-sdk'); */
const { ThirdwebSDK } = require("@thirdweb-dev/sdk/evm");

const sdk = ThirdwebSDK.fromPrivateKey("6f4201c4d51cf541707293ce9068160b681ee58c57bdbbe09592e2151007d6d2", "fantom-testnet");



const callAlchemy = async (wallet) => {
    const contract = await sdk.getContract("0x2936C1Af841F61cf6489B5B989c5070b2b6A2Df5");
   const amount = 1000000000000000000n; //Fixed Token Value per bottle
   const data = await contract.call("mintTo", wallet, amount);
   console.log(data);
    return data;
}


module.exports = { callAlchemy };