import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import '../css/initializeNFT.css'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { ethers } from 'ethers';
import fractionalReal from '../../artifacts/contracts/fractionalReal.sol/fractionalReal.json';
// const { ethers } = require("hardhat");

// const contractAddress = process.env.CONTRACT_ADDRESS;
const contractAddress = "0x37A9D54d51C9969701dE69D1825444F6110E9634";

const SellStake = () => {

  const [nTokens, setNTokens] = useState('');
  const [pricePerToken, setPricePerToken] = useState('');


   // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }  

  async function clicked(){
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, fractionalReal.abi, signer)
      try {
        const data = await contract.sellStake(nTokens, pricePerToken)
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  

  return (
    <div>
      <Container className='container-class'>
        <Box className='initialize-title'>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
          >
            Sell Stake
          </Typography>
          <hr />
        </Box>

        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="left"
              sx={{
                marginBottom: "2%"
              }}
            >
              Property Token
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Token Address: {ntokens}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Tokens Available: {ntokens}
            </Typography>
          </Grid> */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                align="left"
                marginRight='2%'
              >
                Enter Number of Tokens:
              </Typography>
              <TextField 
                value = {nTokens}
                onChange={(e) => setNTokens(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                align="left"
                marginRight='2%'
              >
                Enter Price:
              </Typography>
              <TextField 
                value = {pricePerToken}
                onChange={(e) => setPricePerToken(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <div className='loginButton' style={{width: '10%', margin: 'auto'}} onClick={() => {clicked()}}>
              Submit
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SellStake;