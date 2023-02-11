import react, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import TabNavItem from './tabNavItem';
import TabContent from './tabContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import { Typography } from '@mui/material';

const TenantDashboard = () => {
  const rentedList = [
    {
      nftID: "9328498320948012412",
      rent: 1000,
    },
    {
      nftID: "2037401742070923809",
      rent: 2000,
    },
    {
      nftID: "3240129347803750707",
      rent: 1500,
    },
  ];

  return (
    <div>
      <Container className='container-class'>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
        >
          Tenant Dashboard
        </Typography>
        <hr />
        <Typography
          variant="h4"
          sx={{
            marginBottom: "3%"
          }}
        >
          List of Properties Rented
        </Typography>
        <Grid container rowSpacing={4}>
          {rentedList.map(property => {
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
                        fontSize='1.5rem'
                        align="left"
                      >
                        NFT ID: {property.nftID}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "40%"
                      }}
                    >
                      <Typography
                        fontSize='1.5rem'
                        align="right"
                      >
                        Rent per month: {property.rent}
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

export default TenantDashboard;
