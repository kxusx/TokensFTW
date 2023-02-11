We created a fractionalized real estate token, where multiple stakeholders can participate to co-own a property.

This is a contract for a real estate token built on the Ethereum blockchain. It implements both the ERC20 and ERC721 token standards. The contract has a number of features, including the ability to sell stakes in the token, the ability to rent out the token, and the ability to set the token for sale. The contract uses OpenZeppelin libraries for its implementations of ERC20 and ERC721, as well as for the Ownable contract for the token's ownership and for the SafeMath library for arithmetic operations.

- The contract has a number of state variables, such as numTokens which tracks the number of tokens that exist, stakeholders which is an array of addresses of the token's stakeholders, and status which tracks the current status of the token (unrented, rented, or for sale).

- The contract also implements functionality for selling stakes in the real estate assets, and has various functions to allow stakeholders to manage their stakes.

- The contract also allows to rent to multiple tenants at pre-decided rents.

In the frontend, we allow for stakeholders to put their tokens for sale, they can choose to only a part of their tokens at sale for their chosen price. Then other stakeholders/buyers can purchase those tokens at the agreed price.

![imgs/login]




