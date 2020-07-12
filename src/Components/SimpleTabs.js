import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProjectAlbumView from "./ProjectAlbumView";

const getData = (allData, language) => {
  const newData = allData.filter((item) => {
    const isLanguage = item.language.find((lang) =>
      lang === language ? true : false
    );
    if (isLanguage === language) {
      return true;
    } else {
      return false;
    }
  });
  return newData;
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const { data } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          // variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Python" {...a11yProps(1)} />
          <Tab label="Django" {...a11yProps(2)} />
          <Tab label="React JS" {...a11yProps(3)} />
          <Tab label="Asp.Net" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProjectAlbumView data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectAlbumView data={getData(data, "Python")} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectAlbumView data={getData(data, "Django")} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProjectAlbumView data={getData(data, "ReactJs")} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProjectAlbumView data={getData(data, "Asp.Net")} />
      </TabPanel>
    </div>
  );
}
