// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4 <0.9.0;


import "@openzeppelin/contracts/proxy/Clones.sol";
import "./ERC721AUpgradeable.sol";
import "./NiftiosERC721V2.sol";

contract Niftios721ACloneFactory {

    address immutable tokenImplementation;
    NiftiosERC721V2[] public NiftiosERC721Addresses;

    event Niftios721ACreated(address tokenAddress);

    // When the factory is constructed, create the implementation contracts
    constructor() {
        tokenImplementation = address(new NiftiosERC721V2());
    }

    function addNewErc721(string memory name,
        string memory symbol,
        string memory baseTokenURI) external
    returns (NiftiosERC721V2)  {

        //Creating a new NiftiosERC721 object, you need to pay //for the deployment of this contract everytime - $$$$
        NiftiosERC721V2 niftiosERC721Address = NiftiosERC721V2(Clones.clone(tokenImplementation));

        // since the clone create a proxy, the constructor is redundant and you have to use the initialize function
        niftiosERC721Address.initialize(name, symbol, baseTokenURI, msg.sender);

        //Adding the new NiftiosERC721 to our list of crew addresses
        NiftiosERC721Addresses.push(niftiosERC721Address);
        emit Niftios721ACreated(address(niftiosERC721Address));
        return niftiosERC721Address;
    }
}