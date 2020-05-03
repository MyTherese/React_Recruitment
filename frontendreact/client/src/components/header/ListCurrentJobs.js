
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Jobs from '../pictures/Jobs.jpeg';



const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      margin: '50px'
   
    },
    media: {
      height: 140,
      padding: 20
    },

    jobs: {
      maxWidth:'100%',
      padding:'10px',
color:'red'
    }
  });




function DataFetching ()  {
     const [jobs, setJobs] = useState([]);



   

// const handleSubmit = (e) => {

  useEffect (() => {
    axios.get('http://localhost:8080/jobs')
  
   
          .then(res => {
              setJobs(res.data);
            console.log(res)
            
          })
          .catch(err => {
            console.log("error")
             
          })
  }, []);
  
  const classes = useStyles();

    return (
        // <div className={classes.list}>
        //     <ul>
        //     { 
        //     users.map(post => (<li key={post.id}>{post.name}</li>

        //      ) )}
        //     </ul>

        // </div>
        <Card className={classes.root}>
        <h2>Current applications</h2>
      
        <CardMedia title="company"/>
       
             <img src={Jobs} alt="belecoJobs" style={{width:'100%'}}/>
        
        <CardActionArea>
        {jobs.map(post => (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" >
            {post.title} 
            {post.description} 
            {post.department} 
            </Typography>
          </CardContent>
          ))}
        </CardActionArea>
  
      </Card>
    )
}

export default DataFetching;


