import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';

const OptionList = (props) => {
  return (
       
  
    <Grid  direction="coloumn" sx={{border:"1px solid grey",width:"12%",marginTop:"28%",marginLeft:"30%",zIndex:"50",position:"absolute",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {props.item}
    <DeleteIcon 
    onclick ={e=>{
        props.deleteItem(props.index)
    }}
     
     
     />
    </Grid>
     
      
   

  )
}

export default OptionList
