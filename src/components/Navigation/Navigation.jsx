import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import navigationConfig from '../../configs/navigationConfig';

import NavGroup from './sections/NavGroup';
import NavCollapse from './sections/NavCollapse';
import NavItem from './sections/NavItem';
import NavLink from './sections/NavLink';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import AvatarBadge from '../AvatarBadge/AvatarBadge';
import { Avatar, ListItemAvatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  logoBg: {
    backgroundColor: theme.palette.type !== 'light' && '#424242'
    // backgroundColor: "#18202c"
  },
  logo: {
    padding: '0.5rem',
    '& span': {
      display: 'block',
      color: 'rgba(133 133 133)',
      fontSize: '12px'
    }
  },
  navCustom: {
    '& .MuiTypography-root': {
      fontSize: '.85rem'
    },
    '& .MuiListItemIcon-root': {
      minWidth: '35px'
    },
    '& .MuiCollapse-wrapperInner a': {
      paddingLeft: '50px'
    }
  }
}));

const Navigation = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <div className={clsx(classes.toolbar, classes.logoBg)}>
        {/* <Typography
          className={classes.logo}
          variant="h6"
          component="h1"
          align="center"
        >
          &copy; 
          <span>React Admin</span>
        </Typography> */}
        <iframe
          title="logo"
          src="https://files.fm/thumb_show.php?i=upyb5du9w"
          frameworker="0"
          scrolling="0"
          width="300px"
          height="60px"
          frameBorder="none"
          style={{ margin: '30px 0 10px 20px' }}
        />
        <ListItemAvatar>
          <AvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            variant="dot">
            <Avatar
              alt="User"
              src="https://files.fm/thumb_show.php?i=ud7xwjw8c"
              // height="200" width="300"
              style={{ margin: '10px 0 28px 20px' }}
            />
            <Typography className={classes.logo} variant="h7" component="h4" align="top">
              Albert Einstein
              <span>TPA Admin</span>
            </Typography>
          </AvatarBadge>
        </ListItemAvatar>
      </div>
      <Divider />
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === 'group' && <NavGroup item={item} />}

            {item.type === 'collapse' && <NavCollapse item={item} />}

            {item.type === 'item' && <NavItem item={item} />}

            {item.type === 'link' && <NavLink item={item} />}

            {item.type === 'divider' && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Navigation;
