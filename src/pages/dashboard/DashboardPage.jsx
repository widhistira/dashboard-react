import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Chart from '../../components/Chart/Chart';
import BarChart from '../../components/Chart/BarChart';
import PieChart from '../../components/Chart/PieChart';
import SimpleTable from './components/SimpleTable';
import clsx from 'clsx';

const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: '10px 5px 5px 10px'
  },
  mt: {
    marginTop: 13
  },
  titlePaper: {
    marginBottom: '16px'
  },
  visitorChart: {
    // height: "150px"
  }
}));

const DashboardPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <Layout>
      <h1>Dashboard</h1>
      <iframe
        title="star repo"
        src=""
        frameworker="0"
        scrolling="0"
        width="75px"
        height="30px"
        frameBorder="none"
        style={{ marginBottom: '20px' }}
      />
      <Breadcrumbs path={history} />
      <Grid container spacing={2}>
        <Grid className={classes.visitorChart} item xs={12}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Visitors
            </Typography>
            <Chart />
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper className={clsx(classes.paddingPaper, classes.mt)} variant="outlined">
              <Typography className={classes.titlePaper} variant="h5">
                Foods
              </Typography>
              <SimpleTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={clsx(classes.paddingPaper, classes.mt)} variant="outlined">
              <Typography className={classes.titlePaper} variant="h5">
                Sales
              </Typography>
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Customers
            </Typography>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
