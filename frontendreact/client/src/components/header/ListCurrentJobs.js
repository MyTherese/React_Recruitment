
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
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
        <h1>Current job openings!</h1>
      
        <CardMedia title="company"/>
       
             <img src={Jobs} alt="belecoJobs" style={{width:'100%', height: '450px'}}/>
        
        <CardActionArea>
        {jobs.map(post => (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" style={{backgroundColor:'lightGrey'}}>
              <ul style= {{listStyle:'none'}}>
                  <li>Titel: {post.title}</li>
                  <li>Description: {post.description}</li>
                  <li>Department: {post.department}</li>
              </ul>
            </Typography>
          </CardContent>
          ))} 
        </CardActionArea>
  
      </Card>
    )
}

export default DataFetching;


