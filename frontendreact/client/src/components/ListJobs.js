import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Marketing from './pictures/Marketing.jpeg';
import Logo from './pictures/Logo.png'
import { Link } from "react-router-dom";

// import JobViewer from '../JobViewer';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '50px'
 
  },
  media: {
    height: 140,
    padding: 20
  },
});

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
      department
    }
  }
`;


export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (

    <Card className={classes.root}>
      <h2> Current position availble!</h2>
      
      <CardMedia
          className={classes.media}
          image={Logo}
          title="company"
        />


      <CardActionArea>
      {data.posts.map(post => (

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
          </Typography>
        </CardContent>

        ))}

      </CardActionArea>

      <CardActions>
        <Button size="medium" color="primary">
          Share on social media
        </Button>
        <Link to='./formApply'>
        <Button size="medium" color="primary">
          Apply
        </Button>
        </Link>
      </CardActions>


      {/* <JobViewer/> */}
    </Card>
    )}
  </Query>


  );


}
