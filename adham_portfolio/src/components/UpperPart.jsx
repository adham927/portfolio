import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import PImage from '../assets/images/profile.jpg'
import '../App.css'
import SocialFollow from "./SocialFollow"

const UpperPart = () => {
  return (
    <Box 
    sx={{
        width: '100%',
        height: 300,
       
        display: { xs: 'block', sm: 'none', md: 'block' },
        backgroundColor: '#0080ff',
      }}
    >
      <Stack className='title'
    justifyContent="flex-start" flexWrap="wrap">
    
    
    <img src={PImage} alt="" className="profile-img"/>
  <Typography variant='h4' color='#fff' 
    >
    Adham Amer  
    </Typography> 
      </Stack>
      <SocialFollow />
    </Box>
    
  )
}

export default UpperPart