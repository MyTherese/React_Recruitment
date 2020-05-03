
import React from 'react';
// import '../BigImage.css';
import Mobileimage from './pictures/Mobileimage.jpeg';
import image from './pictures/image.jpg';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Media from 'react-media';
// import Logo from './Logo.png'


const styles = {
    image:{
        // position: 'relative',
        // top: 100
        
    },

    mainDesktop:{
        // border: '2px solid black',
        // margin: 0
      
        },
    

    buttonDesktop:{
        // position:'absolute',
        // width: 200,
        // color: 'blue',
        // textAlign: 'center',
        // xIndex: 1
       

    },

    buttonsDesktop:{
        // position: 'absolute',
        // textAlign: 'center',
        // border:"2px solid blue", 
        // width:"100%",
        // height: 40

    },






    mainMobile:{
        // border: "2px solid black",
        // topMargin: '200px',
        // height: '100px',
        // width: '50px',
        // backgroundColor: 'pink'

        },

    buttonMobile:{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent:'spaceBetween',
        // textAlign: 'center',
        // width: 400,
        // whiteSpace: 'nowrap',
        // borderRadius: 50,
        // bottom:50 
    },




    buttonsMobile:{
        // color: 'blue'
        // border: '2px red solid',
        // textAlign:'center',
        // color:'blue',
    }



   
 
}



 const Header = (props) =>{  
    const {classes} = props;

    function handleClick (e){
        e.preventDefault();
    
      }
    
        return (  
        <div>

        <Media query="(min-width: 600px)" render={() =>
                (

        <div className={classes.mainDesktop} style={{display: 'flex', flexDirection: 'column', width: '100%', position:'relative'}}>

        <img src={image} alt= "websiteImage" style={{ width:"100%", fontSize:'0'}}/>
       
            {/* <div className={classes.containerDesktop} style={{position:'absolute',display:'flex', flexDirection:'row', border:'2px solid black', top: '200px', width:'600px'}}> */}

            <Link to ={'./ListCurrentJobs'} style={{textDecorationLine: 'none'}}>
            <Button className={classes.buttonDesktop} style= {{backgroundColor:"black", width: '300px', color:"white", borderRadius: 50, position:'absolute', top: '70%', left:'5%'}}variant="contained">
            Lediga jobb..
            </Button> 
            </Link>

            <Button onClick = {handleClick} className={classes.buttonDesktop} style={{backgroundColor:"white", color: 'black', borderRadius: 50, width:'300px', position: 'absolute', top:'70%', right: '5%'}} variant="contained">
            Vem vi är..
            </Button> 
        </div>
    
         )}
        />
      



{/* mobile */}
        <Media query="(max-width: 600px)" render={() =>
                (
                <div className={classes.mainMobile} style={{position:"relative", display:"flex", flexDirection: "row"}}>


                    <img className={classes.image} style= {{width:"100%", fontSize:'0'}} src={Mobileimage} alt= "Mobileimage"/>

                    <Link to ={'./ListCurrentJobs'} style={{textDecorationLine: 'none', width:"200px"}}>
                    <Button className={classes.buttonMobile} style={{backgroundColor:"black", color:"white", width: '400px', borderRadius: 50, position:'absolute', top: '70%', left: "10%"}} variant="contained">
                    Lediga jobb..
                    </Button> 
                    </Link>


                    <Button onClick = {handleClick} className={classes.buttonAboutMobile} style={{backgroundColor:"white", color:"black", width: '400px', borderRadius: 50, position:'absolute', top: '50%', left: '10%' }} variant="contained">
                    Vem vi är..</Button> 
                </div>
              
             
                
                )}
                />
        </div>
       
      
    );
     
}



export default withStyles (styles)(Header);