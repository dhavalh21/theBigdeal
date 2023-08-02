import { checkError } from "@/helpers/constants/wallet.utils";
import { METAMASK_ERROR_CODES } from "@/helpers/constants/web3.constants";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);

/**
 * @description Checks if the user has MetaMask installed.
 * @returns {Boolean} - true if installed.
 */
export const metamaskInstallationCheck = () =>
  window.ethereum && window.ethereum.isMetaMask ? true : false;

/**
 * @description Returns a list of accounts the node controls.
 * @returns {String} wallet address of the connected user.
 */
export const fetchConnectedAccounts = async () =>
  (await web3.eth.getAccounts())[0];

/**
 * @description Connects an application with metamask.
 * @returns {(String | Boolean)} - returns string if no error's thrown, else boolean.
 */
export const connectToMetaMask = async () => {
  const walletAddress = await fetchConnectedAccounts();
  if (walletAddress) return walletAddress;
  try {
    const walletAddressArr = await web3.currentProvider.request({
      method: "eth_requestAccounts",
    });
    return walletAddressArr[0];
  } catch (error) {
    // TODO: Switch 'checkError' to function call file.
    checkError(error);
    return false;
  }
};

/**
 * @description Creates a confirmation asking the user to add the specified chain to the wallet application.
 * @param {Object} networkParams
 * @returns {Boolean}
 */
export const addChain = async (networkParams) => {
  try {
    await web3.currentProvider.request({
      method: "wallet_addEthereumChain",
      params: [networkParams],
    });
    return true;
  } catch (error) {
    // TODO: Switch 'checkError' to function call file.
    checkError(error);
    return false;
  }
};

/**
 * @description - Requests that the wallet switches its active Ethereum chain.
 * @param {network} - network to which the user needs to switch
 * @returns {Boolean} true if no error's thrown and successful switch else false.
 */
export const switchChain = async (network) => {
  try {
    await web3.currentProvider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: network.chainId }],
    });
    return true;
  } catch (error) {
    if (
      error.code === METAMASK_ERROR_CODES.CHAIN_NOT_ADDED ||
      error.code === METAMASK_ERROR_CODES.INTERNAL_JSON_RPC
    ) {
      try {
        if (await addChain(network)) {
          if (await checkNetwork(network.chainId)) return true;
        }
      } catch (error) {
        return false;
      }
    } else return false;
  }
};

/**
 * @description - Helps import tokens into Metamask.
 * @param {Object} tokenOptions - token options of the token to be imported into the wallet.
 * @returns {Boolean} true if no error's thrown.
 */
export const importTokenIntoMetaMask = async (tokenOptions) => {
  try {
    return await web3.currentProvider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: tokenOptions,
      },
    });
  } catch (error) {
    // TODO: Switch 'checkError' to function call file.
    checkError(error);
    return false;
  }
};

/**
 * @description Ensures the user's on the BSC Testnet chain.
 * @param {string} - hexadecimal value of netId
 * @returns {Boolean} - true if user's on the required chain.
 */
export const checkNetwork = async (netId) =>
  (await web3.eth.getChainId()) === (await web3.utils.hexToNumber(netId));

/**
 * @description Initializes a smart contract object.
 * @param {Object} abi - smart contract's abi.
 * @param {String} contractAddress - smart contract's address.
 * @returns {Object} - contract's instance.
 */
const initializeSmartContract = (abi, contractAddress) =>
  new web3.eth.Contract(abi, contractAddress);

/**
 * @description Generic function to send a transaction to the smart contract.
 * @param {String} contractFunction - contract's function name.
 * @param {Object} functionInput - contract's function's array of parameters.
 * @param {Object} sendInput - array of parameters necessary to send transaction.
 * @param {Object} abi
 * @param {String} contractAddress
 * @returns {Object}
 */
export const sendSmartContract = (
  contractFunction,
  functionInput,
  sendInput,
  abi,
  contractAddress
) => {
  const contractInstance = initializeSmartContract(abi, contractAddress);
  return contractInstance.methods[contractFunction]
    .apply(null, functionInput)
    .send.apply(null, sendInput)
    .on("transactionHash", function () {
      console.log("Transaction's in process. Kindly wait.");
    })
    .on("receipt", function (receipt) {
      if (receipt.status) {
        console.log("Transaction's successful.");
      }
    })
    .on("error", function (error) {
      // checkError(error);
    });
};

/**
 * @description Generic function to call a constant method from the smart contract.
 * @param {String} contractFunction - contract's function name.
 * @param {Object} functionInputs - contract's function's array of parameters.
 * @param {Object} abi
 * @param {String} contractAddress
 * @returns {Object}
 */
export const callSmartContract = async (
  contractFunction,
  functionInputs,
  abi,
  contractAddress
) => {
  const contractInstance = initializeSmartContract(abi, contractAddress);
  return contractInstance.methods[contractFunction]
    .apply(null, functionInputs)
    .call()
    .then((result) => result);
};

/**
 * @description Converts an amount into Wei or from Wei, as specified.
 * @param {Number} amount - amount to be converted.
 * @param {Function} toOrFromWei - function to be used.
 */
export const weiFunctions = (amount, toOrFromWei) =>
  web3.utils[toOrFromWei](amount);
