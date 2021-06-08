import React from 'react';
import { 
  Box,
  Button,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "40px 120px",
      backgroundColor: "#262626",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    text: {
      fontWeight: "bold",
      fontSize: "25px"
    },
    text2: {
      paddingTop: "20px",
      paddingBottom: "30px",
    },
    videoBox: {
      backgroundColor: "#e8e8e8",
      height: "240px",
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
      }
    },
    icon: {
      borderRadius: "50%",
      padding: "10px",
      fontSize: "30px",
      backgroundColor: "white"
    },
    textBox: {
      width: "calc(50% - 20px)",
      color: "white",
      marginLeft: "20px",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        marginLeft: "0",
      }
    },
    button: {
      backgroundColor: "#10d5eb",
      color: "white"
    }
  })
);

const Video = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.videoBox}>
        <PlayArrowIcon className={classes.icon}/> 
      </Box>
      <Box className={classes.textBox}>
        <Typography className={classes.text}>What Are You Waiting For?</Typography>
        <Typography className={classes.text}>Start it Today</Typography>
        <Typography className={classes.text2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tenetur molestiae iure accusantium 
          ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tenetur molestiae iure accusantium </Typography>
        <Button variant="contained" className={classes.button}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default Video;
