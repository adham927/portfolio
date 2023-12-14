import React from 'react'
import {Box,Typography, Button } from '@mui/material'; 
const Summary = () => {
  return(
    <Box sx={{mt: {lg: "50px", xs: "35px"}, ml: {sm: "50px" }}} position="relative" p="5px">
        <Typography fontWeight={700} sx={{ fontSize: {lg: "44px", xs: "40px"}}} mb="23px">
        Hi, I'm Adham.
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="20px" mt="30px">
        I love to build amazing
        apps.
        </Typography>
      
        <Button variant="contained" color="info" href="#contact" sx={{backgroundColor:"ff2625", padding: "10px"}}>
         Contact me  
        </Button>
        <Button variant="contained" color="info" href="#projects" sx={{backgroundColor:"ff2625", padding: "10px" , ml: {lg: "20px", xs: "10px"}}}>
         See my last work 
        </Button>
    </Box>
  )
}

export default Summary