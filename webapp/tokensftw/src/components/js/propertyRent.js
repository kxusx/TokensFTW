import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import '../css/initializeNFT.css'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const PropertyRent = () => {
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
            Request to Rent
          </Typography>
          <hr />
        </Box>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "3%"
          }}
        >
          List of Properties Available
        </Typography>
        <Grid container rowSpacing={4}>
          {tokens.map(token => {
            return (
              <Grid item xs={12}>
                <Card>
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
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
                    <Box
                      sx={{
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        align="center"
                      >
                        <div className='loginButton' style={{ width: '300%', margin: 'auto', marginTop: '5%' }}>
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

export default PropertyRent;