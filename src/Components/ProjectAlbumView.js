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

function ProjectAlbumView(props) {
  const classes = useStyle();

  const {data} = props

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
