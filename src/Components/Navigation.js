import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
  makeStyles,
  Container,
  Avatar,
} from "@material-ui/core";
// import { MdMenu } from "react-icons/md";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Img from "../Assets/ChetanBhogade.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navigation() {
  const classes = useStyles();
  const customStyle = {
    color: "#ffffff",
    textDecoration: "none",
  };
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MdMenu /> */}
              <Avatar alt="Chetan Bhogade" src={Img} />
            </IconButton>
            <Typography variant="inherit" className={classes.title}>
              Chetan Bhogade
            </Typography>
            <Router>
              <Button color="inherit">
                <Link style={customStyle} to="/">
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={customStyle} to="/about">
                  About
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={customStyle} to="/contact">
                  Contact
                </Link>
              </Button>
            </Router>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navigation;
