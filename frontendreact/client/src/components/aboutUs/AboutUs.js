import React, { Component } from './node_modules/react';
import { withStyles} from './node_modules/@material-ui/core/styles';
import { Grid, Typography } from "./node_modules/@material-ui/core";
import CardContent from "./node_modules/@material-ui/core/CardContent";
import CardMedia from "./node_modules/@material-ui/core/CardMedia";
import images from './AboutUsData';
// import { Link } from "react-router-dom";
import '../App.css';

// import Prismic from 'prismic-javascript'
// import { Date, Link, RichText } from 'prismic-reactjs'







const useStyles = theme => ({
   card: {
    display:'block',
    width: 200,
    height: 300
    },
    image:{
        borderRadius: 500,
       
        "&:hover": {
            opacity: 0.4
          },
    },
    boxText:{
        paddingTop: 35,
        textAlign:'center',
        textDecoration:'none'
       
    },
    text:{
        color:'black',
        textDecoration:'none'
    }


  });

  

class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
           
        };

        this.handleEvent = this.handleEvent.bind(this)
    }


    handleEvent = () => {
    // get api post request POST 
        console.log("working")
    }



    render() {
       
        const {classes}=this.props;
        return (

<React.Fragment>
            <div style={{backgroundColor: 'lightGrey'}}>
                <Grid style={{padding: 50}}container spacing={10} justify="center">
                    {images.map(person => (
                        <Grid item key={person.id}>

                          
                            {/* <Link to={'/Staff/' + person.id}> */}
                            {/* <Link to ={'/prismic/:uid'}> */}
                        
                                   
                                <div className ={classes.card}>
                                        <CardMedia  className={classes.image} 
                                            component="img"
                                            alt="Staff"
                                            height="200"
                                            image={person.src}
                                            title="Contemplative Staff"
                                        />
                                        <CardContent className={classes.boxText}>
                                            <Typography className={classes.text} variant="h5">
                                                {person.name}
                                            </Typography>
                                            <Typography style={{color:'black'}}>{person.title}</Typography>
                                        </CardContent>
                                </div>  

                              
                                {/*                                
                            </Link> */}
                        </Grid>
                    ))}
                </Grid>
            </div>
</React.Fragment>


        );
    }

};






export default withStyles (useStyles)(AboutUs);




