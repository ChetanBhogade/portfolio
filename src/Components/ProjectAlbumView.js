import React, { useState } from "react";
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
import { Modal, Carousel } from "react-bootstrap";
import * as firebase from "firebase";

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

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    images: [],
    s_desc: "",
    tech_stack: [],
    implemented_topic: [],
  });
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    const currentData = firebase.database().ref(item.key);
    currentData.on("value", (snapshot) => {
      setModalData({
        ...snapshot.val(),
        visit: item.visit,
        src: item.src,
      });
    });
    setShow(true);
  };

  const { data } = props;

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
                    onClick={() => {
                      handleShow(item);
                    }}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      onClick={() => {
                        handleShow(item);
                      }}
                      variant="h5"
                      component="h2"
                    >
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
      <Modal
        show={show}
        animation={true}
        centered={true}
        size="lg"
        className="mt-5"
        onHide={() => handleClose()}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {modalData.images.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <hr />
            <h5>Description: - </h5>
            <p>{modalData.s_desc}</p>
            <hr />
            <h5>Topics Covered: - </h5>
            <ul>
              {modalData.implemented_topic.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <hr />
            <h5>Tech Stack Used For This Proejct: - </h5>
            <ul>
              {modalData.tech_stack.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <hr />

            {modalData.visit ? (
              <a
                href={modalData.visit}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button size="small" color="primary">
                  Visit Project
                </Button>
              </a>
            ) : null}

            <br />

            {modalData.src ? (
              <a
                href={modalData.src}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button size="small" color="secondary">
                  View Project Source Code
                </Button>
              </a>
            ) : null}
          </Container>
        </Modal.Body>
        <Modal.Footer className="mb-5"></Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ProjectAlbumView;
