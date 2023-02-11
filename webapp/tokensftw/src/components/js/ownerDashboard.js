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
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const OwnerDashboard = () => {
  const [total_tokens, setTotalTokens] = useState(100);
  const [tokens_owned, setTokensOwned] = useState(30);

  const stakeholders = [
    {
      'address': '0x1234567890',
      'tokens_owned': 10,
    },
    {
      'address': '0x1234567891',
      'tokens_owned': 10,
    },
    {
      'address': '0x1234567892',
      'tokens_owned': 10,
    },
    {
      'address': '0x1234567893',
      'tokens_owned': 20,
    },
    {
      'address': '0x1234567894',
      'tokens_owned': 20,
    },
  ];

  const options = {
    cutoutPercentage: 60,
    animation: {
      animateScale: true
    },
    // circumference: 1.5 * Math.PI,
    // rotation: 0.75 * Math.PI,
    responsive: false,
    tooltips: {
      // enabled: false,
      callbacks: {
        label: (tooltipItem, data) => {
          // Get the dataset label, global label or fall back to empty label
          let label =
            (data.datasets[tooltipItem.datasetIndex].labels &&
              data.datasets[tooltipItem.datasetIndex].labels[
              tooltipItem.index
              ]) ||
            data.labels[tooltipItem.index] ||
            "";
          if (label) {
            label += ": ";
          }

          // Apply the value and suffix
          label +=
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
            (data.datasets[tooltipItem.datasetIndex].labelSuffix || "");

          return label;
        }
      }
    }
  };

  const data = {
    datasets: [
      {
        data: [tokens_owned, total_tokens - tokens_owned],
        backgroundColor: ["#004c90", "#ccc"],
        labels: ["On track", "Remaining"],
        labelSuffix: "%",
        pointStyle: "circle"
      }
    ]
  };

  return (
    <div>
      <Container className='container-class'>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
        >
          Owner Dashboard
        </Typography>
        <hr />
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
            >
              Total Number of Tokens: {total_tokens}
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Tokens you have: {tokens_owned} ({tokens_owned / total_tokens * 100}%)
            </Typography>
          </Grid> */}
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
                    width: "100%"
                  }}
                >
                  <Typography
                    align="left"
                    variant="h4"
                  >
                    Tokens you own: {tokens_owned} ({tokens_owned / total_tokens * 100}%)
                  </Typography>
                </Box>
                {/* <Box
                  sx={{
                    width: "40%"
                  }}
                >
                  <div className="chartContainer">
                    <Doughnut data={data} options={options} height={200} width={200} />
                  </div>
                </Box> */}
              </CardContent>
            </Card>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                mt={12}
              >
                Total Number of Stakeholders: {stakeholders.length}
              </Typography>
              {
                stakeholders.map((stakeholder, index) => {
                  return (
                    <Card sx={{width: '50%', margin: 'auto', marginTop: '2rem'}}>
                      <CardContent
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%"
                          }}
                        >
                          <Typography
                            align="cener"
                            variant="h5"
                          >
                            Address: {stakeholder.address}
                          </Typography>
                          <Typography
                            align="cener"
                            variant="h5"
                          >
                            Tokens owned: {stakeholder.tokens_owned} ({stakeholder.tokens_owned / total_tokens * 100}%)
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "40%"
                          }}
                        >
                          <div className="chartContainer">
                            <Doughnut data={
                              {
                                datasets: [
                                  {
                                    data: [stakeholder.tokens_owned, total_tokens - stakeholder.tokens_owned],
                                    backgroundColor: ["#004c90", "#ccc"],
                                    labels: ["On track", "Remaining"],
                                    labelSuffix: "%",
                                    pointStyle: "circle"
                                  }
                                ]
                              }
                            } 
                            options={options} height={100} width={100} />
                          </div>
                        </Box>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default OwnerDashboard;
