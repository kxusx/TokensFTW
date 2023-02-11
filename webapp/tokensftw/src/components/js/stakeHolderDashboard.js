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
// import 'chart.js/auto';
// import { Doughnut } from 'react-chartjs-2';

const StakeHolderDashboard = () => {
  const [total_tokens, setTotalTokens] = useState(100);
  const [tokens_owned, setTokensOwned] = useState(30);

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
          Stake Holder Dashboard
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
                <Box
                  sx={{
                    width: "40%"
                  }}
                >
                  {/* <div className="chartContainer">
                    <Doughnut data={data} options={options} height={200} width={200} />
                  </div> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default StakeHolderDashboard;
