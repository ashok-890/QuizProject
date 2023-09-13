import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Navbar from './Navbar'
import HomeCard from './HomeCard'
import { Container, createTheme } from '@mui/material'
const theme = createTheme({
  palette: {
  primary: {
  main: '#ffff',
  },
  },})

const Home = () => {
  return (
   <ThemeProvider theme={theme}>
    {/* <Navbar/> */}
    
    <Container>
      <HomeCard/>
    </Container>
   </ThemeProvider>
  )
}

export default Home
