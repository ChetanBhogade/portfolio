import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import CardGameImg from "../Assets/Projects/CardMemoryGame.png"
import eCommImg from "../Assets/Projects/eComm.png"
import EventImg from "../Assets/Projects/EventCountdown.png"
import NccImg from "../Assets/Projects/NccManagement.png"
import TtsImg from "../Assets/Projects/TextToSpeech.png"

const useStyle = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const data = [
  {
    name: "E-Commerce Website - 'eComm'",
    description:
      "Basic eCommerce website with the implementation of some Analytics based on views, time and amount purchased.",
    image: eCommImg,
    visit: "http://chetanbhogade.pythonanywhere.com/",
    src: "https://github.com/ChetanBhogade/E-Commerce-Project",
  },
  {
    name: "Card-Memory Game",
    description:
      "A game where you have to click on a card to see what icon is underneath it and try to find the matching icon underneath the other cards.",
    image: CardGameImg,
    visit: "https://chetanbhogade.github.io/card-memory-game/",
    src: "https://github.com/ChetanBhogade/card-memory-game",
  },
  {
    name: "Event Countdown",
    description:
      "Continuously decrementing countdown timer to a user entered event.",
    image: EventImg,
    visit: "https://chetanbhogade.github.io/Event-Countdown/",
    src: "https://github.com/ChetanBhogade/Event-Countdown",
  },
  {
    name: "Ncc Management",
    description:
      "All Ncc related paper works are try to make digital. All CRUD operations are performed.",
    image: NccImg,
    visit: null,
    src: "https://github.com/ChetanBhogade/NCC-Management",
  },
  {
    name: "Text-To-Speech",
    description:
      "This software can read text from input field and can also read whole text file.",
    image: TtsImg,
    visit: null,
    src: "https://github.com/ChetanBhogade/TextToSpeech/blob/master/TextToSpeech.py",
  },
];

function ProjectAlbumView() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.map((item, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {item.visit ? (
                      <a
                        href={item.visit}
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button size="small" color="primary">
                          Visit
                        </Button>
                      </a>
                    ) : null}

                    {item.src ? (
                      <a
                        href={item.src}
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button size="small" color="secondary">
                          Source Code
                        </Button>
                      </a>
                    ) : null}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default ProjectAlbumView;
