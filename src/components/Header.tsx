import React from 'react';
import { Container, Typography } from '@material-ui/core/';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "gray",
      textAlign: "center",
      color: "white",
      padding: "20px",

    },
    text: {
      fontSize: "20px",
      fontWeight: "bold"
    }
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.text}>Create your own Geninue Web Masterpiece</Typography>
      <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tenetur molestiae iure accusantium </Typography>
    </Container>
  )
}

export default Header;