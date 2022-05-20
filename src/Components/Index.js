import React , { Component } from 'react';
import Web3 from 'web3';
import testContractABI from '../artifacts/abi/testcontract.json';
import erc20ContractABI from '../artifacts/abi/erc20.json';
import lendingPoolContractABI from '../artifacts/abi/lendingPool.json';
import uniswapRouterABI from '../artifacts/abi/uniswapRouter.json';

import addresses from '../artifacts/addresses.json';


export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
         testContract: null,
            daiERC20Contract: null,
            lendingPoolContract: null,
            aDAIContract: null,
            uniswapRouterContract : null,
            uniswapEthDaiPool : null,
            accounts: [],
            allowances: [],
            daiBalance: 0,
            aDaiBalance: 0,
            uniBalance: 0   
        };
    }

    async componentDidMount() {
        await this.loadWeb3()
        await this.balance0fDAI()
        await this.balance0fADAI()
        await this.allowance(addresses.aavelendingpoolcontract)
        await this.allowance(addresses.uniswapRouter);
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('non Ethereum browser detected. Download Metamask')
        }

        const web3 = window.web3;
        console.log(uniswapRouterABI, addresses.uniswapRouter );

    }
}