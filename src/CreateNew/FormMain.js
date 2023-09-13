import React, { useState } from 'react'
import { Typography,TextField,Container,Checkbox,Fab, Stack,Button,Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CreateNewQuiz from './CreateNewQuiz';





  const FormMain = (props) => {

const [optionText, setOptionText] =useState('');
const handleEnterPress = (e)=>{
  if(e.keyCode=== 13){
    props.addList(optionText)
    setOptionText("")
  }
}



 return (
 <>
     <Typography variant='h4' sx={{display:"flex",position:"absolute",left:"40%",top:"11%",justifyContent:"center"}}>
    Create New Quiz
   </Typography>
    <Container sx={{ position:"absolute",top:"18%",left:"10%",flexWrap:"wrap"}}>
  <Box sx={{
          backgroundColor:"white",
          width:"1100px",
          height:"550px",
          padding:"16px",
          boxShadow:2,
          alignItems:"center"
  }}
  >
  <form nonvalidate autoComplete='off'>
   <Box sx={{flexDirection:"column", display:"flex",rowGap:"2",boxShadow:"2", padding:"15px"}}>
   <TextField sx={{backgroundColor:"white"}}
    label="Title of the Quiz"
    variant='outlined'
    fullWidth
    required
   
    
    />
   
    <TextField sx={{marginTop:"2%",backgroundColor:"white"}}
    label="Add Description"
    variant='outlined'
    multiline
    rows={3}
    fullWidth
    required
      />
      </Box>
    
      <Typography sx={{marginTop:"2%"}}>
    Question
  </Typography>

    <TextField 
   label="Enter your Question"
   variant='outlined'
   fullWidth
   required
        />
   

<Stack direction="row" spacing={0}sx={{marginTop:"10%",marginLeft:"30%"}}>
        <TextField 
       label="Enter options"
       variant='outlined'
       required
       value={optionText}
       onChange={e=>{
        setOptionText(e.target.value)
       }}
       addList="addList"
       onKeyDown={handleEnterPress}
        />
         
         
         <Checkbox 
          label="Correct"
                       />
               <p style={{marginTop:"2%",marginRight:"2%"}}>Correct</p>
               <Fab 
     size='medium'
     color='primary'
     aria-label='add'
     onClick={()=>{
      props.addList(optionText)
      setOptionText("")
     }}
     >
       <AddIcon/>
       </Fab>
</Stack>
    
     <Stack spacing={25} direction="row" sx={{marginTop:"5%",marginLeft:"30%"}}>
     <Button variant='contained' onClick={()=>alert("Question has been added")}>Add Question</Button>
     <Button variant='contained' onClick={()=>alert("saved Successfully")}> Save</Button>
     </Stack>
  

     </form>
  </Box>
    
   </Container>
  
    <div>
    <CreateNewQuiz/>
  
   
    </div>
   </>
   
  )
}

export default FormMain
