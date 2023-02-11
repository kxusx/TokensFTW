import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import '../css/initializeNFT.css'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const BuyNft = () => {
  const [tokens, setTokens] = useState([
    {
      'token_address': 'abcdef',
      'ntokens': 25,
      'price_per_token': 1000,
    },
    {
      'token_address': 'gdfgv',
      'ntokens': 50,
      'price_per_token': 5000,
    }
  ])

  return (
    <div>
      <Container className='container-class'>
        <Box className='initialize-title'>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
          >
            Buy NFT
          </Typography>
          <hr />
        </Box>

        <Grid container rowSpacing={4}>
          {tokens.map(token => {
            return (
              <Grid item xs={12}>
                <Card>
                  <CardContent
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%"
                      }}
                    >
                      <Typography
                        align="left"
                        variant="h4"
                      >
                        Property Token
                      </Typography>
                      <Typography
                        fontSize='1.5rem'
                        align="left"
                      >
                        Token Address: {token.token_address}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontSize='1.5rem'
                        align="left"
                      >
                        Tokens Available: {token.ntokens}
                      </Typography>
                      <Typography
                        fontSize='1.5rem'
                        align="left"
                        gutterBottom
                      >
                        Price Per Token: {token.price_per_token}
                      </Typography>
                      <Typography
                        align="center"
                      >
                        <div className='loginButton' style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                          Submit
                        </div>
                      </Typography>

                    </Box>

                  </CardContent>
                </Card>
              </Grid>
            )
          })}

        </Grid>
      </Container>
    </div>
  )
}
export default BuyNft;
