import React from 'react'
import {projects}  from './Data'
import {Box,Typography} from '@mui/material'

const Projects = () => {

  return (
    <Box sx={{
      width: '100%',
      height: '370px',
      mt:'20px',
      display: { xs: 'block', sm: 'none', md: 'block' },
      backgroundColor: '#0080ff',
    }}>
      {projects && projects.map((project) => (
        <Box
        mt='20px'
        alignItems="center"
        justifyContent="center"
        position='relative'
        top="20px"
        left="50px"
        sx={{ gap: '47px'}}
        >
             {project.image &&  <img 
                width='150px'
                height='150px'
                src={project.image} alt="fitness-projectd"
              />  } 
               <a
            href={project.link}
            >
               <Typography mt="10px" variant='h5' color='black'>
               {project.title}
               </Typography>
               </a>
               <Typography mt="10px" variant='h5'>
               {project.description}
               </Typography>
         
        </Box>   
        ))}
    </Box>  
  )
}

export default Projects