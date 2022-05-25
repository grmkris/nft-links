import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const version = "v0.1.0";
const contractName = "NftLink";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getChainId, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  console.log("Deployer:" + deployer);
  if (
    +chainId === 4 ||
    +chainId === 80001 ||
    +chainId === 69 ||
    +chainId === 31337
  ) {
    await deploy(contractName, {
      contract: contractName,
      from: deployer,
      log: true,
    });
  }
  return true;
};

const id = contractName + version;

export default func;
func.tags = [id, version];
func.id = id;
