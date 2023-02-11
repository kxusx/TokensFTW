import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import '../css/initializeNFT.css'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const SellStake = () => {

  const [tokenAddress, setTokenAddress] = useState('92354289332987480974203470487302948-248-328');
  const [tokensAvailable, setTokensAvailable] = useState('10');

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
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Token Address: {tokenAddress}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Tokens Available: {tokensAvailable}
            </Typography>
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
                width='25%'
              >
                Enter Price:
              </Typography>
              <TextField />
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
                width='25%'
              >
                Enter Number of Tokens:
              </Typography>
              <TextField />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <div className='loginButton' style={{width: '10%', margin: 'auto', marginTop: '5%'}}>
              Submit
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SellStake;