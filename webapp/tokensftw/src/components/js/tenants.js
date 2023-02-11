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

import '../css/login.css';
import '../css/tenants.css';

import { Typography } from '@mui/material';

const activeTenantsList = [
  {
    id: 1,
    address: '98234798234730247324732',
    rent: 1000,
  },
  {
    id: 2,
    address: 'eiudhf938274823hedadwod',
    rent: 2000,
  },
  {
    id: 3,
    address: '982347982idsu0247324732',
    rent: 3000,
  },
  {
    id: 4,
    address: '9823479823473024729346392',
    rent: 4000,
  },
  {
    id: 5,
    address: '9820808099ss4730247324732',
    rent: 5000,
  },
];

const requestedTenantsList = [
  {
    id: 1,
    address: '98234798234730247324732',
  },
  {
    id: 2,
    address: 'eiudhf938274823hedadwod',
  },
  {
    id: 3,
    address: '982347982idsu0247324732',
  },
  {
    id: 4,
    address: '9823479823473024729346392',
  },
  {
    id: 5,
    address: '9820808099ss4730247324732',
  },
];

const Tenants = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [showAccept, setShowAccept] = useState(false);
  const [currentTenant, setCurrentTenant] = useState({});

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpenAccept = () => {
    setShowAccept(true);
  };

  const handleCloseAccept = () => {
    setShowAccept(false);
  };

  return (
    <div>
      <Container className='container-class'>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
        >
          Tenants
        </Typography>
        <hr />
        <Grid container rowSpacing={4} sx={{ marginTop: '-12%' }}>
          <Grid item xs={12}>
            <Grid item xs={12} className="tabs_wrapper">
              <ul className="nav-tab">
                <TabNavItem
                  title="View tenants"
                  className="mr-3"
                  id="tab1"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title="Tenant Requests"
                  id="tab2"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>
              <Grid item xs={12} className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                  <Grid container rowSpacing={4}>
                    {activeTenantsList.map(tenant => {
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
                                  variant="h5"
                                >
                                  Address: {tenant.address}
                                </Typography>
                                <Typography
                                  fontSize='1.5rem'
                                  align="left"
                                >
                                  Rent: {tenant.rent}
                                </Typography>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                  <Grid container rowSpacing={4}>
                    {requestedTenantsList.map(tenant => {
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
                                  variant="h5"
                                >
                                  Address: {tenant.address}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: "60%"
                                }}
                              >
                                <Button
                                  variant="contained"
                                  sx={{
                                    backgroundColor: '#00bfa5',
                                    color: 'white',
                                    width: '15%',
                                  }}
                                  onClick={() => {
                                    setCurrentTenant(tenant);
                                    handleOpenAccept();
                                  }}
                                >
                                  Accept
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    width: '15%',
                                    marginLeft: '10%'
                                  }}
                                >
                                  Reject
                                </Button>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>

                </TabContent>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Modal open={showAccept} onClose={handleCloseAccept}>
          <Box sx={style}>
            <Grid container rowSpacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  padding="2%"
                  marginBottom="10%"
                  textAlign="center"
                >
                  Accept Tenant
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  padding="2%"
                  marginBottom="10%"
                >
                  Address: {currentTenant.address}
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Rent"
                  variant="outlined"
                  sx={{
                    width: '100%',
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#00bfa5',
                    color: 'white',
                    width: '100%',
                    marginTop: '10%'
                  }}
                >
                  Accept
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Container>
    </div>
  )
}

export default Tenants;
