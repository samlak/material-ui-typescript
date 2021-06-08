import React from 'react';
import { 
  Box,
  Container,
  Typography
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "40px 120px",
      backgroundColor: "#edfeff",
      textAlign: "center"
    },
    gallery: {
      display: "flex",
      marginTop: "30px",
      flexWrap: "wrap",
    },
    galleryItem: {
      backgroundColor: "grey",
      height: "150px",
      margin: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "calc(25% - 20px)",
      [theme.breakpoints.down('sm')]: {
        width: "calc(50% - 20px)",
      },
      [theme.breakpoints.down('xs')]: {
        width: "100%",
      }
    },
    galleryItemIcon: {
      color: "white",
    },
    text: {
      fontWeight: "bold",
      fontSize: "30px"
    }
  })
);

const Gallery = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.text}>Let Them know Why you Are the best</Typography>
      <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat tenetur molestiae iure accusantium </Typography>
      <Box className={classes.gallery}>
        <Box className={classes.galleryItem}>
          <LocationSearchingIcon className={classes.galleryItemIcon} />
        </Box>
        <Box className={classes.galleryItem}>
          <LocationSearchingIcon className={classes.galleryItemIcon} />
        </Box>
        <Box className={classes.galleryItem}>
          <LocationSearchingIcon className={classes.galleryItemIcon} />
        </Box>
        <Box className={classes.galleryItem}>
          <LocationSearchingIcon className={classes.galleryItemIcon} />
        </Box>
      </Box>
    </Container>
  );
}

export default Gallery;
