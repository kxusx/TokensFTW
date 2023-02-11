import react, { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";

import '../css/initializeNFT.css'

// for web3 communication
import { ethers } from 'ethers'
import fractionalReal from '../../artifacts/contracts/fractionalReal.sol/fractionalReal.json';

// require('dotenv').config();
// const contractAddress = process.env.CONTRACT_ADDRESS;
const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

const InitializeNft = () => {
    const [ntokens, setNtokens] = useState('')
    const [pricePerToken, setPricePerToken] = useState('')
    const [propertyPrice, setPropertyPrice] = useState('')

    useEffect(() => {
        if (ntokens != '' && pricePerToken != '') {
            setPropertyPrice(ntokens * pricePerToken)
        }
    }, [ntokens, pricePerToken])

    // request access to the user's MetaMask account
    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    // call the smart contract, read the current greeting value
    async function initialize() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            // console.log(process.env.REACT_APP_CONTRACT_ADDRESS)
            const contract = new ethers.Contract(contractAddress, fractionalReal.abi, signer)
            try {
                console.log(contractAddress)
                console.log(ntokens)
                const data = await contract.initialize(ntokens)
                console.log('data: ', data)
            } catch (err) {
                console.log("Error: ", err)
            }
        }
    }


    return (
        <div>
            <Container className='container-class'>
                <Box className='initialize-title'>
                    <Typography
                        variant="h3"
                        component="div"
                        gutterBottom
                    >
                        Initialize NFT
                    </Typography>
                    <hr />
                </Box>

                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                marginRight='3%'
                                width='25%'
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'light'
                                }}
                            >Number of tokens:</Typography>  <TextField
                                value={ntokens}
                                onChange={(e) => { setNtokens(e.target.value) }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                marginRight='3%'
                                width='25%'
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'light'
                                }}
                            >Price per token:</Typography>
                            <TextField
                                value={pricePerToken}
                                onChange={(e) => { setPricePerToken(e.target.value) }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                marginRight='3%'
                                width='50%'
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'light'
                                }}
                            >Total Price of Property: {propertyPrice}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant='contained'
                            size='large'
                            onClick={initialize}
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default InitializeNft;