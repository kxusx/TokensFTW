import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import "../css/initializeNFT.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { BigNumber, ethers } from 'ethers';
import fractionalReal from '../../artifacts/contracts/fractionalReal.sol/fractionalReal.json'
// const contractAddress = process.env.CONTRACT_ADDRESS;
const contractAddress = "0x37A9D54d51C9969701dE69D1825444F6110E9634";

const BuyNft = () => {

  const [stakeSales, setStakeSales] = useState([]);
  const [stakeSalesLength, setStakeSalesLength] = useState(0);

  // function to get stakeSalesLength from the contract
  async function getStakeSalesLength() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, fractionalReal.abi,provider);
      try {
        const data = await contract.getStakeSellsLength();
        // convert data which is bignumber to int
        let data2 = BigNumber.from(data).toNumber();

        console.log("data2: ", data2);
        setStakeSalesLength(data2);
        return data2;
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // get the stakeSales from the contract
  async function getStakeSales1() {
    let size = await getStakeSalesLength();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, fractionalReal.abi,provider);
      try {
        const data = await contract.getStakeSales();
        // use for loop to get all the stakeSales
        let tempStakeSales = [];
        for (var i = 0; i < size; i++) {
          // const data = await contract.methods.stakeSales(i).call();
          
          // convert the struct to an object
          let data2 = {};
          data2.stakeholder = data[i].stakeholder.toString();
          // console.log(data2.stakeholder);
          data2.nTokens = BigNumber.from(data[i].noOfTokens).toNumber();

          data2.pricePerToken = BigNumber.from(data[i].priceOfToken).toNumber();
          console.log("DJdata: ", data2);
          // add to tempStakeSales
          tempStakeSales.push(data2);
        }
        // set stakeSales to tempStakeSales
        setStakeSales([...tempStakeSales]);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // function to buy stake
  async function buyStakeClicked(token,i) {
    console.log(i)
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, fractionalReal.abi,signer);
      try{
        const data = await contract.buyStakeFromStakeholder(i,{value: token.nTokens*token.pricePerToken});
        console.log("data: ", data);
      }
      catch (err) {
        console.log("Error: ", err)
      }
      
      //     console.log(`${transaction.hash}`);
    }
  }





  // create useffect hook to call getStakeSales
  useEffect(() => {
    getStakeSalesLength();
    getStakeSales1();
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
          {stakeSales.map((token,i) => {
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
                        Seller Address: {token.stakeholder}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography fontSize="1.5rem" align="left">
                        Tokens Available: {token.nTokens}
                      </Typography>
                      <Typography fontSize="1.5rem" align="left" gutterBottom>
                        Price Per Token: {token.pricePerToken}
                      </Typography>
                      <Typography align="center">
                        <Button variant="contained" onClick={() => {buyStakeClicked(token, i)}}>Buy Stake</Button>
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
