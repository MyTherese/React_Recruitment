import React from "react";
import { useState, useEffect } from "react";
import Logo from '../pictures/Logo.png'
import '../App.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });



    const StickyHeader = () => {  
        const classes = useStyles();
        const [state, setState] = useState(false);

    useEffect (()=> {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    );




    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
      
        console.log('worked');
    };


    const list = (anchor) => (  
        <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>


    <Link to = "/LogIn" >  
        <List>
        {['Jobs', 'Inlogg for admin'].map((text, index) => (
             <ListItem button key={text}>
             <ListItemText 
             style={{padding:'5px'}}
             primary={text} />
           </ListItem>
        ))}
        </List>
    </Link>
        </div>

);



    return (  
        <div>
            <nav className="nav" id="myHeader">
            {['left'].map((anchor) => (
            <React.Fragment key={anchor}>

            <MenuIcon 
            className="menu" 
            onClick ={toggleDrawer(anchor, true)}/>
            <Drawer anchor= {anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>{list(anchor)}
            </Drawer>

            </React.Fragment>))}

            <img className="logo" src={Logo} alt="belecoLogo"/>
            </nav>
        </div>
    );

    }

export default StickyHeader;

