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
import { animateScroll as scroll, Link } from "react-scroll";

import Img from "../Assets/FaceProfile.jpg";

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
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {scroll.scrollToTop()}}
            >
              <Avatar alt="Chetan Bhogade" src={Img} />
            </IconButton>
            <Typography variant="inherit" className={classes.title}>
              Chetan Bhogade
            </Typography>
            <Button color="inherit">
              <Link
                style={customStyle}
                to="about"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                style={customStyle}
                to="project"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navigation;
