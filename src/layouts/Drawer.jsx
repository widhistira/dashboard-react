import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import OftadehNavigation from '../components/Navigation/Navigation';
import NavigationContext from '../context/NavigationContext';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props) => props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: (props) => props.drawerWidth,
    '& *': {
      color: 'RGB (0, 0, 0)'
    }
  }
}));

const OftadehDrawer = (props) => {
  const classes = useStyles(props);
  const { open } = React.useContext(NavigationContext);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}>
      <OftadehNavigation />
    </Drawer>
  );
};

export default OftadehDrawer;
