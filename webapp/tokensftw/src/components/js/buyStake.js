import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import "../css/initializeNFT.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { ethers } from 'ethers';
import fractionalReal from '../../artifacts/contracts/fractionalReal.sol/fractionalReal.json'
// const contractAddress = process.env.CONTRACT_ADDRESS;
const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

const BuyNft = () => {

  const [stakeSales, setStakeSales] = useState([]);

  // get the stakeSales from the contract
  async function getStakeSales() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress,fractionalReal.abi,provider);
      try {
        const data = await contract.getStakeSales();
        console.log("data: ", data);
        setStakeSales(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // create useffect hook to call getStakeSales
  useEffect(() => {
    getStakeSales();
  }, []);

  return (
    <div>
      <Container className="container-class">
        <Box className="initialize-title">
          <Typography variant="h3" component="div" gutterBottom>
            Buy Stake
          </Typography>
          <hr />
        </Box>

        <Grid container rowSpacing={4}>
          {stakeSales.map((token) => {
            return (
              <Grid item xs={12}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                      }}
                    >
                      <Typography align="left" variant="h4">
                        Property Token
                      </Typography>
                      <Typography fontSize="1.5rem" align="left">
                        Token Address: {token.stakeholder}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography fontSize="1.5rem" align="left">
                        Tokens Available: {token.noOfTokens}
                      </Typography>
                      <Typography fontSize="1.5rem" align="left" gutterBottom>
                        Price Per Token: {token.priceOfToken}
                      </Typography>
                      <Typography align="center">
                        <Button variant="contained">Buy Stake</Button>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default BuyNft;
