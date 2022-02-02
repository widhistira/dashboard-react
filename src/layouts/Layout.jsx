import React from 'react';

import NavigationContext from '../context/NavigationContext';
import Drawer from './Drawer';

import Main from './Main';
import Header from './Header';
import RightPanel from '../components/RightPanel/RightPanel';

const handleDrawerResponsive = () => {
  if (window.innerWidth < 900) {
    return false;
  }

  return true;
};

const Layout = (props) => {
  const [open, setOpen] = React.useState(() => handleDrawerResponsive());

  React.useEffect(() => {
    window.addEventListener('resize', resizeChecker);

    return () => {
      window.addEventListener('resize', resizeChecker);
    };
  }, []);

  const resizeChecker = () => {
    if (handleDrawerResponsive()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openRightPanel, setOpenRightPanel] = React.useState(false);
  const handleRightPanelOpen = (event, newValue) => {
    setOpenRightPanel(!openRightPanel);
    handleChange(event, newValue);
  };

  return (
    <NavigationContext.Provider
      value={{
        open,
        handleDrawerToggle,
        value,
        handleChange,
        handleRightPanelOpen,
        openRightPanel,
        setOpenRightPanel
      }}>
      <Header />
      <Drawer drawerWidth={340} />
      <RightPanel />
      <Main drawerWidth={290} />
    </NavigationContext.Provider>
  );
};

export default Layout;
