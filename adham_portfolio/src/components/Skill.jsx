import React from 'react'
import {BadgeCheckIcon, ChipIcon} from '@heroicons/react/solid';
import {Box, Stack, Typography} from '@mui/material'
const Skill = () => {
  return (
    <Box id="skills"  sx={{mt: {lg: "50px", xs: "35px"}, ml: {sm: "50px" }}} className="text-gray-400 body-font" position="relative" p="5px">
      <Stack>
        <Typography variant='h4'>
          Skills &amp; Technologies
        </Typography>
        <Typography variant='h5' mt='10px'>
          Here are some of the skills that i have experience with:
        </Typography>
        <Stack className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <Typography className="p-2 sm:w-1/2 w-full title-font font-medium text-white" mt='10px' >
            React.js
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Skill