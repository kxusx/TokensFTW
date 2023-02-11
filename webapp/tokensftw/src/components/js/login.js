import react from 'react';
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
  return (
    <div>
      <Container className='loginContainer'>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
          className='loginTitle'
        >
          Welcome to TokensFTW
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} className='loginSubtitle'>
            Connect your wallet to continue
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={2}>
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
              >
                <FormControlLabel value="female" control={<Radio />} label="Owner" />
                <FormControlLabel value="male" control={<Radio />} label="Stake Holder" />
                <FormControlLabel value="other" control={<Radio />} label="Tenant" />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: '90%', marginTop: '20px', borderRadius: '10px' }}
              className='loginButton'
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
