import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloudIcon from '@material-ui/icons/Cloud';
import './styles.scss';


const Header = () => {

  return (
    <AppBar position="static" className="toolbar" color="transparent">
      <Toolbar>
        <CloudIcon className="appLogo" />
        <Typography variant="h5" className="appTitle">
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
