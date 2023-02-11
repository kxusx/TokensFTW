# TOKENSftw (Tokens for-the-win)
**NOTE:** This is the official submission repo for our team TOKENSftw at Lumos BUIDL-HYD Hackathon.
**Spheron Deployment :** This project is deployed on [Spheron](https://bafybeiavpsr33fkw2dguk2fhpipujunbetgkgqoitfazpiz7s56y3ev2my.ipfs.sphn.link/).
## Real Estate Marketplace
The real-estate market today has a lot of middle-men involved and no transparency. We hope to decentralize this by making a platform where property NFTs are being sold. We also hope to manage distributed real-estate. 

NOTE : This is not a typical alternate to *Art-based NFT* marketplaces, this is a platform where each property has stakeholders and tenants on rent. The rent gets distributed amongst the stakeholders according to their stake, and the property is sold (NFT transferred) only if a  *multi-wallet signature* agreement is made between all stakeholders.

### Our Solution

We created a fractionalized real estate token, where multiple stakeholders can participate to co-own a property.

This is a **Web3 dApp** for a real estate token built on the Ethereum blockchain. It implements both the `ERC20` and `ERC721` token standards. The contract has a number of features, including the ability to sell stakes in the token, the ability to rent out the token, and the ability to set the token for sale. The contract uses OpenZeppelin libraries for its implementations of `ERC20` and `ERC721`, as well as for the Ownable contract for the token's ownership and for the SafeMath library for arithmetic operations.

-   The contract has a number of state variables, such as numTokens which tracks the number of tokens that exist, stakeholders which is an array of addresses of the token's stakeholders, and status which tracks the current status of the token (unrented, rented, or for sale).
    
-   The contract also implements functionality for selling stakes in the real estate assets, and has various functions to allow stakeholders to manage their stakes.
    
-   The contract also allows to rent to multiple tenants at pre-decided rents.
- Users log in through their Metamask wallet and choose their role as a stakeholder or tenant.
    
## Flow of the Smart Contract
We made 2 smart-contracts for this project with over 400 lines of code (stored in `./contracts/`). Although we could not fully integrate all of the functions with the frontend, but we tried our best with the limited time we got :)

#### 1. Initialize the property
- The *Owner* calls `initialize()` to
	- generate property NFT.
	- mint 'x' ERC20 tokens at a price of 'y' *wei* per token.
- *Owner* also specifies how many maximum tokens they want to sell.
#### 2. Stakeholders
- *Stakeholder* logs in to buy stake in any available property.
- They can also sell some/all their stake at a price (per token) they specify.
#### 3. Tenants
- *Tenants* looking for rent can send a rent-request to the owner, for which the Owner decides the rent to be paid.
- Tenants have the option to pay rent, which gets distributed to all stakeholders in proportion to their stake.
#### 4. Selling Property NFT
- *Owner* puts the property for sale at some 'z' price.
- All stakeholders vote using a *multi-wallet signature* mechanism, and if the votes pass a given threshold, the NFT is sold to the highest bidder.

## Flow of the webApp

- Login Screen
![](https://github.com/kxusx/TokensFTW/blob/master/imgs/login.jpeg)

- Initialize NFT Screen
![](https://github.com/kxusx/TokensFTW/blob/master/imgs/initializeNFT.jpeg)

- Owner Dashboard Screen
![](https://github.com/kxusx/TokensFTW/blob/master/imgs/ownerDashboard.jpeg)

- Sell Stake Screen
![](https://github.com/kxusx/TokensFTW/blob/master/imgs/sellStake.jpeg)

- Buy Stake Screen
![](https://github.com/kxusx/TokensFTW/blob/master/imgs/buyStake.jpeg)
- Tenants Screen
![](https://github.com/kxusx/TokensFTW/blob/master/imgs/tenants.jpeg)

## Technologies Used
- Frontend
Spheron, ReactJs, EthersJs
- Blockchain (backend)
Solidity, Remix, Hardhat, Goerli Testnet (final deployment), Hardhat-localnetwork, openZepplin, AlchemyAPI, EthersJs

###### Made with <3 at JNTU @LumosBUIDL Hackathon !
