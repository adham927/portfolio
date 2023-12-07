import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
const Footer = () => {
  return (
    <Box  sx={{
      width: '100%',
      height: '80px',
      mt:'20px',
      display: { xs: 'block', sm: 'none', md: 'block' }
    }}>
     <Stack gap='40px' alignItems='center' >
       <Typography variant='h5' pb='40px' mt='20px'>
       Made with ❤️ by Adham Amer
        </Typography> 
     </Stack>
    </Box>
  )
}

export default Footer