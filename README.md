# Rezy-Fantom
This is the general repo of the Rezy project for Fantom Hackathon 2023

# General Architecture:
--------------Frontend side---------------------------
The Rezy project is made of various elements described as follows:
1) A frontend interface for user ( served via web and running on an android device attached to a QR reading device, id could also work on any other android device)
2) A swap station web page for those customers who wish to trade their PET token and convert them into fUSD tokens ( The site works with Metamask)
3) A forked fantom wallet with for receiving PET Tokens , it can also wokr with metamask too

------------Backend Side------------------------------
1) A backend and a middleware that connects to frontend user interface and manage all QR readings and executes the PET tokens minting to the wallets.
2) A remote LAMP server that executes a simple database , this database changes the state 0 to 1 and viceversa everytime a succesful scaning is made
3) A thirdweb API that connects using thirdweb SDK ( This calls a minting fuction )
4) 2 ERC20 smartcontracts fromThirdWeb that represents PET and fUSD tokens , another contract forked from fantom for exchanging PET for fUSD tokens in 1 :1 ratio.

---------Basic Hardware--------------------------
1) ESP32 board that communicates with the LAMP remote server in order to turn on/off a green led when a valid QR code is read.
2) A Android board oginally used for bus validator and refactored for fitting in the demo box.
3) A cardboard made "machine" for illustrating how this project works in a possible real scenario at a smaller scale ( of course).

# Contract Addresses
PET token=0x2936C1Af841F61cf6489B5B989c5070b2b6A2Df5
fUSD token=0x39D974c8307e7E194Ed6C5258DfC9D8b0648A158
Swap station=0x52386394F71539f468152B220A46E6A2aDd82cF0
Main Wallet=0xA7a171CCf274D0dCdC1FB4c8B7d440c4D5834053

# Frontend links


# QR codes used for testing



