// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/draft-ERC721VotesUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./ERC721AUpgradeable.sol";

/// @custom:security-contact kristjan.grm1@gmail.com
contract NiftiosERC721V2 is
Initializable,
OwnableUpgradeable,
ERC721AUpgradeable
{

    function initialize(string memory name, string memory symbol) public initializer {
        __ERC721A_init(name, symbol);
        __Ownable_init();
    }

}