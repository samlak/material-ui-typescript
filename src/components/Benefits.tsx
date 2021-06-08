import React from 'react';
import { 
  Box,
  Container,
  Typography
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import ComputerIcon from '@material-ui/icons/Computer';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "40px 120px",
      flexWrap: "wrap",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "10px",
      marginBottom: "20px",
      width: "calc(25% - 20px)",
      [theme.breakpoints.down('sm')]: {
        width: "calc(50% - 20px)",
      },
      [theme.breakpoints.down('xs')]: {
        width: "100%",
      }
    },
    icon: {
      fontSize: "30px",
      marginRight: "10px",
      marginBottom: "10px",
      backgroundColor: "#10d5eb",
      color: "white",
      borderRadius: "50%", 
      padding: "10px",
    },
    circle: {
      backgroundColor: "grey",
      borderRadius: "50%",
      height: "200px",
      width: "200px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    text: {
      paddingTop: "20px",
    },
    header: {
      fontWeight: "bold",
      paddingTop: "20px",
    }
  })
);

const Benefits = () => {
  const classes = useStyles();
  const data = [
    {
      Icon: LanguageIcon,
      header: "Two Big Word",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum soluta voluptatem, ducimus, facere velit laudantium corporis sunt ut mollitia obcaecati eius minima cumque "
    },
    {
      Icon: ComputerIcon,
      header: "Two Big Word",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum soluta voluptatem, ducimus, facere velit laudantium corporis sunt ut mollitia obcaecati eius minima cumque "
    },
    {
      Icon: MessageIcon,
      header: "Two Big Word",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum soluta voluptatem, ducimus, facere velit laudantium corporis sunt ut mollitia obcaecati eius minima cumque "
    },
    {
      Icon: SettingsIcon,
      header: "Two Big Word",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum soluta voluptatem, ducimus, facere velit laudantium corporis sunt ut mollitia obcaecati eius minima cumque "
    },
  ]

  return (
    <Container className={classes.root}>
      {data.map((CardData) => (
        <Box className={classes.card}>
          <Box className={classes.circle}>
            <CardData.Icon  className={classes.icon}/>
          </Box>
          <Typography className={classes.header}> {CardData.header} </Typography>
          <Typography className={classes.text}> {CardData.content} </Typography>
        </Box>
      ))}

    </Container>
  )
}

export default Benefits;
