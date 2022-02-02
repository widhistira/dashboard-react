import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../layouts/Layout';
import LayoutContext from '../../context/LayoutContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

function LayoutComp(props) {
  const classes = useStyles(props);

  return (
    <LayoutContext.Provider value={{ content: props.children }}>
      <div className={classes.root}>
        <CssBaseline />
        <Layout />
      </div>
    </LayoutContext.Provider>
  );
}

Layout.propTypes = {
  container: PropTypes.any
};

export default LayoutComp;
