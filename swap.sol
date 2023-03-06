**
 *Submitted for verification at FtmScan.com on 2023-01-11
*/

// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

interface erc20 {
    function totalSupply() external view returns (uint256);
    function transfer(address recipient, uint amount) external returns (bool);
    function decimals() external view returns (uint8);
    function symbol() external view returns (string memory);
    function balanceOf(address) external view returns (uint);
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);
    function approve(address spender, uint value) external returns (bool);
}

contract settlement {
    address constant fdn = 0xA7a171CCf274D0dCdC1FB4c8B7d440c4D5834053;
    address constant fusd = 0x39D974c8307e7E194Ed6C5258DfC9D8b0648A158;
    address constant dai = 0x2936C1Af841F61cf6489B5B989c5070b2b6A2Df5;

    function swap(uint amount) external {
        _safeTransferFrom(amount);
        _safeTransfer(amount);
    }

    function claim(erc20 token) external {
        require(msg.sender == fdn);
        token.transfer(fdn, token.balanceOf(address(this)));
    }

    function _safeTransfer(uint256 value) internal {
        (bool success, bytes memory data) =
        fusd.call(abi.encodeWithSelector(erc20.transfer.selector, msg.sender, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))));
    }

    function _safeTransferFrom(uint256 value) internal {
        (bool success, bytes memory data) =
        dai.call(abi.encodeWithSelector(erc20.transferFrom.selector, msg.sender, fdn, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))));
    }
}
