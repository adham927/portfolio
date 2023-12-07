import React, {useState} from 'react'
import {Box, Stack, Typography} from '@mui/material'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }

  return (
    <Box  id='contact' 
    sx={{ background: '#0080ff', height: '700px'}}>
      <Stack position='relative'
        top="20px"
        left="50px">
      <Typography variant='h4' color='white'>
            Contact Me:
        </Typography>
        <Stack mt='5px'>
            <Typography variant='h5'>
                Address
            </Typography>
            <Typography>
                Ain Al Asad
            </Typography>
        </Stack>
        <Stack mt='5px'>
            <Typography variant='h5'>
                EMAIL
            </Typography>
            <Typography>
                ameradham152@gmail.com
            </Typography>
        </Stack>
        <Stack mt='5px'>
            <Typography variant='h5'>
            PHONE
            </Typography>
            <Typography>
               0544406658
            </Typography>
        </Stack>
        <Stack mt='40px'>
        <form
          netlify
          onSubmit={handleSubmit}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <div  class="form-group">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label> <br />
            <input  aria-describedby="emailHelp" placeholder="Enter Name" 
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div> 
          <div  class="form-group">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label> <br />
            <input  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> 
          <div  class="form-group">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label> <br />
            <textarea  aria-describedby="emailHelp" placeholder="Enter Message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
          
            type="submit"
            className=" btn btn-light bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
        </Stack>
        
      </Stack>
    </Box>
  )
}

export default Contact