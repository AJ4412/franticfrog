import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Axios from "axios";
import useSWR from 'swr'

import cors from "cors";
// import Video from "../assets/video/hero.mp4";
import Timer from "./common/Timer";
import { Box, Container, Divider, IconButton, Stack } from "@mui/material";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { PrimaryButton } from "./common/PrimaryButton";
import Web3 from "web3";
import Web3Modal from "web3modal";
import swal from "sweetalert";
import { contract_address, contract_abi, buy_price, speedy_nodes } from '../config';

const Hero = () => {
  // set date to 22 feb 2022 9 hours 0 minutes 0 seconds
  const time = new Date("2022-02-22T15:30:00.000Z");
  console.log(time, "time");
  // const date = new Date(Date.now() + 86400000 * 22 + 3600000 * 19);
  // console.log(date);

  // nextTime.getMonth(1);
  // nextTime.getHours(9);
  // nextTime.getMinutes(0);
  // nextTime.getSeconds(0);
  // console.log(nextTime, "next time");


  useEffect(() => {
    fetch_data();
  }, [])
  const [mintNumber, setMintNumber] = useState(1);
  const [mintingcount, setmintingcount] = useState(1)
  const [totalsupply, settotalsupply] = useState(0);
  const [connected, setConnected] = useState(false);
  const [price, set_price] = useState(0);
  // const [total, set_total] = useState(0.2);
  // set_total(mintNumber*price);
  let total = mintNumber * price;

  // const onMintNumberChange = (e) => {
  //   setMintNumber(+e.target.value);
  // }

  const mintButtonClickHandler = () => {
    sale_controller();
  }
  const [walletstatus, set_walletstatus] = useState("Connect Wallet");

  async function connect_wallet() {
    if (Web3.givenProvider) {
      const providerOptions = {
        /* See Provider Options Section */
      };

      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.net.getId().then((result) => {

        console.log("Network id: " + result)
        if (result !== 137) {
          swal("Wrong Network Selected. Select Polygon Mainnet");
        }
        else {
          set_walletstatus("Wallet Connected");
          setConnected(true);
        }
      })

    } else {
      swal("Web3 Not Found");
    }

  }

  async function fetch_supply() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()

    contract.methods.totalSupply().call((err, result) => {
      console.log("error: " + err);
      if (result != null) {
        settotalsupply(result);
      }
    })
  }

  async function fetch_data() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()
    set_price(160);
    // contract.methods.Presale_status().call((err,result) => {
    //     console.log("error: "+err);
    //  //   if(result===true){
    //  //      set_price(0.03);
    //   //  }
    //   //  else{
    //       set_price(0.079);
    //   //  }
    // })
  }



  async function show_error_alert(error) {
    let temp_error = error.message.toString();
    console.log(temp_error);
    let error_list = [
      "It's not time yet",
      "Sent Amount Wrong",
      "Max Supply Reached",
      "You have already Claimed Free Nft.",
      "Presale have not started yet.",
      "You are not in Presale List",
      "Presale Ended.",
      "You are not Whitelisted.",
      "Sent Amount Not Enough",
      "Max 20 Allowed.",
      "insufficient funds",
      "Sale is Paused.",
      "mint at least one token",
      "max per transaction 20",
      "Not enough tokens left",
      "incorrect ether amount",
      "5 tokens per wallet allowed in presale",
      "10 tokens per wallet allowed in publicsale",
      "Invalid merkle proof",
      "Not enough tokens allowed in current phase",
      "Sold Out",
      "No more tokens left in current phase"

    ]

    for (let i = 0; i < error_list.length; i++) {
      if (temp_error.includes(error_list[i])) {
        // set ("Transcation Failed")
        // alert(error_list[i]);
        swal("Alert!", error_list[i], "warning");
      }
    }
  }
  function sale_controller() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()
    console.log("error: i am in fetch ");
    mint_nft();
  }

  async function mint_nft() {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(contract_abi, contract_address);

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];
      console.log("addresses[0]: " + addresses[0]);
      // console.log("addresses[1]: "+addresses[1])
      // console.log("Default address: "+await web3.eth.defaultAccount)
      try {
        const estemated_Gas = await contract.methods
          .mint(mintNumber)
          .estimateGas({
            from: address,
            value: web3.utils.toWei(total.toString(), "ether"),
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
          });
        console.log(estemated_Gas);
        const result = await contract.methods.mint(mintNumber).send({
          from: address,
          value: web3.utils.toWei(total.toString(), "ether"),
          gas: estemated_Gas,
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
        });
      } catch (error) {
        show_error_alert(error);
      }

      // await contract.methods.tokenByIndex(i).call();
    }
  }

  function maxnftbutton() {
    setMintNumber(20);
  }



  const onMinusClickHandler = () => {
    if (mintNumber <= 1) return;

    setMintNumber(mintNumber - 1);
  }

  const onPlusClickHandler = () => {
    if (mintNumber >= 20) return;

    setMintNumber(mintNumber + 1);
  }


  return (
    <div className="hero-section position-relative">
      <div className="hero-sale-section px-2">
        <div className="text-center">
          <img style={{ padding: "40px" }} src="/video/hero.gif" />

          <Stack direction={'row'} justifyContent={'space-between'} sx={{
            fontSize: { xs: '16px', lg: "23px" },
            color: '#000000',
            py: '8px',
            alignItems: 'center',
            margin: "4px 32px"
          }}>
            <Box>
              Quantity
            </Box>
            <Stack alignItems={'center'} direction={'row'} spacing={3}>
              <IconButton onClick={onMinusClickHandler} sx={{
                color: '#000000'
              }}>
                <RemoveOutlinedIcon color={'#000000'} />
              </IconButton>
              <Box>
                {mintNumber}
              </Box>
              <IconButton onClick={onPlusClickHandler} sx={{
                color: '#000000'
              }}>
                <AddOutlinedIcon color={'#000000'} />
              </IconButton>

            </Stack>
            <Box>
              <PrimaryButton onClick={maxnftbutton}>
                MAX
              </PrimaryButton>
            </Box>
          </Stack>
          <Divider color={'red'} sx={{ height: '2px', opacity: '.25' }} />
          {connected ? (
            <button className="mint-button px-5 py-2 my-4">Connected</button>
          ) : (
            <button onClick={connect_wallet} className="mint-button px-5 py-2 my-4">Connect Wallet</button>
          )}
          {" "} {" "} {" "}
          <button onClick={mint_nft} className="mint-button px-5 py-2 my-4">Mint</button>
          {/* <button onClick={mintButtonClickHandler}>MINT</button> */}
          {/* <input value={mintNumber}
                        onChange={e => {
                          setMintNumber(e.currentTarget.value); }}
                                    type="text" placeholder="Amount" /> */}
        </div>
        <div className="sale-section px-sm-5 py-2 ">
          <div className="container">
            {/* <p className="sale-heading montserrat-font-family text-center mb-1">
                  PUBLIC SALE
                </p> */}
            <a href="https://opensea.io/collection/frantic-frog" className="montserrat-font-family sale-text mb-0 text-center">
              CLICK OPENSEA TO PURCHASE
            </a>
            {/* <Timer date="25" sale="PUBLIC SALE" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
