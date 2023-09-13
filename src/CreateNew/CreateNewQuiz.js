import React,{useState} from 'react'
import { Box, Button,Stack,Dialog,DialogContent,DialogTitle,DialogActions,IconButton, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
// import FormMain from './FormMain';

const CreateNewQuiz = () => {

  const [open,openchange]= useState(true);
  const Functionopenpopup =()=>{
   openchange(true);
  }

  const closepopup =()=>{
   openchange(false);
  }
  return (
 
<>
<Dialog open={open} close={closepopup}>
  <DialogTitle variant='h6'>Select Question Type</DialogTitle>
  <DialogContent>
  <DialogActions>
  <Box sx={{
  width:1500,
  height:150,
  backgroundColor:"white" 
}}>
 <IconButton
          aria-label="close"
          onClick={closepopup}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
<Stack direction="row" spacing={4}  >
  <Button variant='outlined' >MCQ (Single correct)</Button>
  <Button variant='outlined'>MCQ (Multiple Correct)</Button>
  </Stack>
  <Stack direction="row" spacing={4} mt={3}>
  <Button variant='outlined'>Short Answer (1 or 2 words)</Button>
  <Button variant='outlined'>Description (0 or 1 sentences)</Button>
  </Stack>

 </Box>
 </DialogActions>
  </DialogContent>
</Dialog>

<div>
  {/* <FormMain/> */}
</div>
</>
 
 )
}
export default CreateNewQuiz
