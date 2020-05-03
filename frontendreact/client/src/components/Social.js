import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import {
    FacebookLoginButton,
    TwitterLoginButton,
    LinkedInLoginButton,
  } from "react-social-login-buttons";
import '../App.css';
import Media from 'react-media';
import { SocialIcon } from 'react-social-icons';


const styles  = {  
    
    
    container: {
        position:'relative'
    },

    buttons:{
        
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        // border: '2px solid black',
        width: 300,
    },
    butt:{
        position: 'relative',
        display: 'flex',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
     
   

    }

}


function Social (props) {
    const {classes}= props;
        return (
            
            <div>
{/* Desktop */}

            <Media query="(min-width: 500px)" render={() =>
                (

            <div className={classes.buttons} style={{"width":"100%", "height":"10%"}}>

            <FacebookLoginButton className={classes.face} onClick={() => alert("Facebook")}>
            <span>Dela med dig</span>
            </FacebookLoginButton>

            <TwitterLoginButton className={classes.face} onClick={() => alert("Twitter")}>
            <span>Dela med dig</span>
            </TwitterLoginButton >

            <LinkedInLoginButton className={classes.face} onClick={() => alert("LinkedIn")}>
            <span>Dela med dig</span>
            </LinkedInLoginButton>
            </div>
            )}
            />

    



{/* mobile viwe */}

            <Media query="(max-width: 500px)" render={() =>
                (
            <div className={classes.butt}>

            <SocialIcon url="http://facebook.com/in/jaketrent"className={classes.icon} onClick={() => alert("Facebook")} />

            <SocialIcon url="http://twitter.com/in/jaketrent"className={classes.icon} onClick={() => alert("Twitter")} />

            <SocialIcon url="http://linkedin.com/in/jaketrent"className={classes.icon} onClick={() => alert("LinkedIn")} />
            </div>
                )}
              />

    </div>
    );

}

export default withStyles(styles)(Social);