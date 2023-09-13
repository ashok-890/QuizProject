import React,{useState} from 'react'
import logo from "../images/Almalogo.jpg"
import {AppBar,Toolbar,Stack} from "@mui/material"
import {NavLink} from "react-router-dom";



export const Navbar = () => {
  // const [value, setValue] = useState()

  return (
  
  <AppBar  position='static'>
    <Toolbar sx={{backgroundColor: "white"}}>
      <img src={logo} alt="" width={"120px"}/>

                 <Stack direction="row" spacing={2}sx={{marginLeft:"Auto",fontSize:"20px",fontFamily:""}}>
                <NavLink style={{textDecoration:"none"}} to="/">Home</NavLink>
                <NavLink style={{textDecoration:"none"}}  to="/My Quizes"> My Quizes</NavLink> 
                 <NavLink style={{textDecoration:"none"}}  to="/Play Quiz">Play Quiz</NavLink>
                 </Stack>
                

                  
                    
                  
                   
                 
    
    </Toolbar>

  </AppBar>

  
   
    
  
  )
}

export default Navbar
