import React from 'react'

const CreateQuest = () => {
  return (
    <>
       <Typography sx={{marginTop:"2%"}}>
    Question
  </Typography>

    <TextField 
   label="Enter your Question"
   variant='outlined'
   fullWidth
   required
        />
   

<Stack direction="row" spacing={0}sx={{marginTop:"6%",marginLeft:"28%"}}>
        <TextField 
       label="Enter options"
       variant='outlined'
       required
        />
         
         
         <Checkbox 
          label="Correct"
                       />
               <p style={{marginTop:"2%",marginRight:"2%"}}>Correct</p>
               <Fab 
     size='medium'
     color='primary'
     aria-label='add'
     >
       <AddIcon/>
       </Fab>
</Stack>
    
     <Stack spacing={25} direction="row" sx={{marginTop:"5%",marginLeft:"30%"}}>
     <Button variant='contained' onClick={()=>alert("Question has been added")}>Add Question</Button>
     <Button variant='contained' onClick={()=>alert("saved Successfully")}> Save</Button>
     </Stack>
  

    </>
  )
}

export default CreateQuest
