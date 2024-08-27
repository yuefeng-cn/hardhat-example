import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      gas: 'auto',
      mining: {
        auto: false,
        interval: 10,
      }
    }
  }
};

export default config;
