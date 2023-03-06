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

# Contract Addresses (Fantom Testnet 4002)
1)PET token=0x2936C1Af841F61cf6489B5B989c5070b2b6A2Df5
2)fUSD token=0x39D974c8307e7E194Ed6C5258DfC9D8b0648A158
3)Swap station=0x52386394F71539f468152B220A46E6A2aDd82cF0  --This contract is the same than "0xBca5E7bCE998e084e06a37d2Cfa89980941D5fDD" from Fantom
4)Main Wallet=0xA7a171CCf274D0dCdC1FB4c8B7d440c4D5834053

# Frontend links
 SwapStation   https://reliable-malabi-22a3bc.netlify.app/
 User interface https://frolicking-faloodeh-d7dc61.netlify.app/
 Wallet  https://app.netlify.com/sites/singular-belekoy-7d79da/

# QR codes used for testing
https://docs.google.com/document/d/1m63L3Ypgrw4PVKWUsY_3F0McWsmNkObP7MPEPyOlwl0/edit?usp=sharing

# Extras
If you need PET tokens feel free to ask me at cedarmat@gmail.com, you can get them too scanning the QR codes and then scanning your wallet on the Fantom testnet network in order to get some :)

David Ramirez 
Quito-Ecuador
cedarmat@gmail.com


