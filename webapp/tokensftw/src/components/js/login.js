import react, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import '../css/login.css';
import { Typography } from '@mui/material';

const Login = () => {
  const [userType, setUserType] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0]);
      localStorage.setItem('userType', userType);
      localStorage.setItem('walletAddress', accounts[0]);
      setWalletAddress(accounts[0]);
      if (userType === 'owner') {
        window.location.href = '/owner-dashboard';
      }
      if (userType === 'stake-holder') {
        window.location.href = '/stakeholder-dashboard';
      }
      if (userType === 'tenant') {
        window.location.href = '/tenant-dashboard';
      }
    }
  }

  return (
    <div>
      <Container className='loginContainer'>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
        >
          Welcome to TokensFTW
        </Typography>
        <hr style={{backgroundColor: '#004c90', height: '2px'}}/>
        <Grid container rowSpacing={4}>
          <Grid item xs={12} className='loginSubtitle'>
            Connect your wallet to continue
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={2} sx={{ marginTop: '-10%' }}>
              <FormLabel id="demo-row-radio-buttons-group-label">User Type</FormLabel>
            </Grid>
            <Grid item xs={12}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              className='radioContainer'
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => { setUserType(e.target.value) }}
              >
                <FormControlLabel value="owner" control={<Radio sx={{
                  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                  {
                    color: '#004c90',
                  },
                  '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                    color: '#004c90',
                  },
                }} />} 
                  label="Owner" 
                />
                <FormControlLabel value="stake-holder" control={<Radio sx={{
                  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                  {
                    color: '#004c90',
                  },
                  '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                    color: '#004c90',
                  },
                }} />} 
                  label="Stake Holder" 
                />
                <FormControlLabel value="tenant" control={<Radio sx={{
                  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                  {
                    color: '#004c90',
                  },
                  '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                    color: '#004c90',
                  },
                }} />} 
                  label="Tenant" 
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className='loginButton' onClick={() => {
              connectWallet();
            }}>
              Connect Wallet
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Login;
