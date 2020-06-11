import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function ProgressBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress
        style={{ height: "10px", borderRadius: "10px" }}
        variant="determinate"
        value={props.value}
      />
    </div>
  );
}

export default ProgressBar;
