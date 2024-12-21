# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```bash
// Test
npx hardhat test

// Compile after a change
npx hardhat compile

// Start node
npx hardhat node

// Deploy
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost

// Copy ./artifacts/contracts/Lock.sol/Lock.json ABI list to client/src/utils/Lock_ABI.json

// Copy deployed address to client/src/utils/constants.js