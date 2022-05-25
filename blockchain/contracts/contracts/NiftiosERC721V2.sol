// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/draft-ERC721VotesUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./ERC721AUpgradeable.sol";

error NonExistentToken();


/// @custom:security-contact kristjan.grm1@gmail.com
contract NiftiosERC721V2 is
Initializable,
OwnableUpgradeable,
ERC721AUpgradeable
{
    string private placeholderURI;

    function initialize(string memory _name, string memory _symbol, string memory _placeholderURI, address owner) public initializer {
        __ERC721A_init(_name, _symbol);
        placeholderURI = _placeholderURI;
        __Ownable_init();
        transferOwnership(owner);

    }

    /// @notice Mint function for use with public minting sales. Mint Fees in native token,
    ///  requires amount * mintPrice to be sent by caller.
    /// @param amount The number of tokens to be minted.
    function mint(uint256 amount) external onlyOwner {
        _mint(msg.sender, amount);
    }

    /// @notice Airdrop (mint directly) to a set of recipients.
    /// @param recipients The list of recipient addresses.
    /// @param amounts The list of amounts corresponding to each recipient address in the first parameter.
    function airdrop(address[] memory recipients, uint256[] memory amounts) external onlyOwner {
        for (uint256 i = 0; i < recipients.length; i++) {
            // Mint tokens to recipient
            _mint(recipients[i], amounts[i]);
        }
    }

    /// @notice Returns the metadata URI for a given token.
    /// @dev Override for ERC721A tokenURI.
    /// @param tokenId The id of the token in this collection to retrieve the URI for. Must exist.
    /// @return The baseURI suffixed with ./{tokenId}.json
    function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
        if (!_exists(tokenId)) revert NonExistentToken();
        string memory baseURI = _baseURI();
        return
        bytes(baseURI).length > 0
        ? string(
            abi.encodePacked(
                baseURI,
                "/",
                StringsUpgradeable.toString(tokenId),
                ".json"
            )
        )
        : string(
            abi.encodePacked(
                placeholderURI,
                "/",
                StringsUpgradeable.toString(tokenId),
                ".json"
            )
        );
    }


}