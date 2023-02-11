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
      </Container>
    </div>
  )
}

export default TenantDashboard;
