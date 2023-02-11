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
        <hr />
        <Grid container rowSpacing={4}>
          <Grid item xs={12} className='loginSubtitle'>
            Connect your wallet to continue
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={2} sx={{marginTop: '-10%'}}>
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
                onChange={(e) => {setUserType(e.target.value)}}
              >
                <FormControlLabel value="owner" control={<Radio />} label="Owner" />
                <FormControlLabel value="stake-holder" control={<Radio />} label="Stake Holder" />
                <FormControlLabel value="tenant" control={<Radio />} label="Tenant" />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: '90%', marginTop: '20px', borderRadius: '10px' }}
              className='loginButton'
              onClick={() => {
                localStorage.setItem('userType', userType);
                if(userType === 'owner') {
                  window.location.href = '/initialize-nft';
                }
              }}
            >
              Connect Wallet
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Login;
