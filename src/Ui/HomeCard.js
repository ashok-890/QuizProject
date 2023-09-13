import React from 'react'
import { Card,Typography, CardMedia,CardActionArea, Grid}from "@mui/material"
import image from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import quizimage from "../images/qimgg.jpeg"
import { Link } from 'react-router-dom'


// import HomeCard from "./HomeCard"

export const HomeCard = () => {
  return (
  <Grid container direction="row" sx={{marginTop:"13%",  justifyContent:"space-around"}}> 
  <Grid >
    <CardActionArea sx={{maxWidth:"300px"}}>
      <Link to ="CreateNewQuiz">
         <Card>
          <CardMedia 
             component={'img'}
             height={"200"}
             image={image}
             alt='img1'
          />
            <Typography variant="h5" sx={{position:'absolute', zIndex:'50',left:'17%' ,top:'40%',fontWeight:"bold"}}>Create New Quiz</Typography>
          
         </Card>
      </Link>
    </CardActionArea>
  </Grid>
  <Grid >
    <CardActionArea  sx={{maxWidth:"300px"}}>
      <Link>
         <Card>
          <CardMedia
             component={'img'}
             height={"200"}
             image={image2}
             alt='img1'
          />
            <Typography variant="h5" sx={{position:'absolute', zIndex:'50',left:'35%' ,top:'40%',fontWeight:"bold"}}>My Quizes</Typography>
         
         </Card>
         
             
      </Link>
    </CardActionArea>
  </Grid>
  <Grid >
    <CardActionArea  sx={{maxWidth:"300px"}}>
      <Link>
         <Card>
          <CardMedia
             component={'img'}
             height={"200"}
             image={quizimage}
             alt='img1'
          />
            <Typography variant="h5" sx={{position:'absolute', zIndex:'50',left:'40%' ,top:'40%',fontWeight:"bold"}}>Play Quiz</Typography>
         
         </Card>
         
             
      </Link>
    </CardActionArea>
  </Grid>
  </Grid>
        
       
  )
}

export default HomeCard
