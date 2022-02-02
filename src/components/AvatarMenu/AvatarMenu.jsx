import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Icon,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  Hidden
} from '@material-ui/core';

import AvatarBadge from '../AvatarBadge/AvatarBadge';
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline'
  },
  menuIcon: {
    minWidth: '33px'
  },
  paddingRightZero: {
    paddingRight: 0
  }
}));

const AvatarMenu = (props) => {
  const classes = useStyles(props);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alignItems="flex-start"
        className={classes.paddingRightZero}>
        <ListItemAvatar>
          <AvatarBadge>
            <Avatar
              alt="User"
              src="https://files.fm/thumb_show.php?i=nfh98t68n"
              style={{ margin: '0 0 10px 0' }}
            />
          </AvatarBadge>
        </ListItemAvatar>
        <Hidden implementation="css" smDown></Hidden>
      </ListItem>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {/* <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Login
                  </MenuItem> */}
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
AvatarMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default AvatarMenu;
