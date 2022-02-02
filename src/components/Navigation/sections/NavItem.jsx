import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Icon, makeStyles } from '@material-ui/core';
import NavLinkAdapter from '../../NavLinkAdapter/NavLinkAdapter';
import NavBadge from '../NavBadge';

const useStyles = makeStyles((theme) => ({
  active: {
    borderRadius: '8px 8px 8px 8px',
    background: '#FBEDEE',
    // width: "300px",
    color: '#C8252C',

    '&:hover': {
      background: '#EDB6G9'
    }
  }
}));

const NavItem = (props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <ListItem
      button
      component={NavLinkAdapter}
      to={item.url}
      activeClassName={classes.active}
      exact={item.exact}>
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
      {item.badge && <NavBadge className="mr-4" badge={item.badge} />}
    </ListItem>
  );
};

export default NavItem;
