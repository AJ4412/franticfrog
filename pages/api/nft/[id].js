import { NextApiRequest, NextApiResponse } from "next";
const testFolder = '../';
const fs = require('fs');
import content from './_metadata1.json';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { contract_address, contract_abi, buy_price, speedy_nodes} from '../../../config';

export default function getNftById(req, res){
    //let rawdata = fs.readFileSync(content);
    //let all_data = JSON.parse(rawdata);
    //  all_data[0].url = "asd";
    //console.log(all_data[0]);
    //console.log(content[0]);


    // res.json({
    //     name: "NGFT #"+ req.query.id,
    //     description: "FRANTIC FROGS Face Team NGFT",
    //     image: "ipfs://QmSG6X29ZGu8EDKzd76r22NJminoPk3exgcLVAJtHa67U3/"
    // })



    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()

    contract.methods.totalSupply().call((err,result) => {
        console.log("error: "+err);
        if(result != null){
            if(parseInt(req.query.id) <=  parseInt(result) ){
                res.json(content[req.query.id]);
            }else{
                res.json("Nft Not Minted Yet")
            }
            
        }
        if(err != null){
            res.json("Nft Not Minted Yet")
        }
    })
   
}