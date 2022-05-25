// SPDX-License-Identifier: CAL
pragma solidity =0.8.10;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./NiftiosERC721.sol";


/// @title NiftiosERC721Factory.sol
/// @notice Factory for creating and deploying `NiftiosERC721` contracts.
contract NiftiosERC721Factory {

    //Creating an array of neb crew addresses
    NiftiosERC721[] public NiftiosERC721Addresses;
    address public implementationAddress;

    function addNewErc721(string memory name,
        string memory symbol,
        string memory baseTokenURI) external
    returns (NiftiosERC721)  {

        //Creating a new NiftiosERC721 object, you need to pay //for the deployment of this contract everytime - $$$$
        NiftiosERC721 niftiosERC721Address = NiftiosERC721(Clones.clone(implementationAddress));

        // since the clone create a proxy, the constructor is redundant and you have to use the initialize function
        niftiosERC721Address.initialize(name, symbol, baseTokenURI);

        //Adding the new NiftiosERC721 to our list of crew addresses
        NiftiosERC721Addresses.push(niftiosERC721Address);
        return niftiosERC721Address;
    }
}
