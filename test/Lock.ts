import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();

    return { lock, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.owner()).to.equal(owner.address);
    });
  });

  describe("balance", function () {
    it("Should set the right balance", async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);
      await lock.add();
      console.log(await time.latestBlock());
      await lock.add();
      await time.increase(100);
      console.log(await time.latestBlock());

      // await lock.add();
      // await lock.add();
      // // await time.increase(100);
      // console.log(await time.latestBlock());

      // await lock.add();
      // await lock.add();
      // // await time.increase(100);
      // console.log(await time.latestBlock());

      expect(await lock.owner()).to.equal(owner.address);
    });
  });
});
