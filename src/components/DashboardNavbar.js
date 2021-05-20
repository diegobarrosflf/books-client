import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar
    elevation={0}
    {...rest}
  >
    <Toolbar>
      <RouterLink to="/">
        <MenuBookIcon style={{ fill: 'white' }} />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden lgDown>
        <IconButton color="inherit" />
      </Hidden>
      <Hidden lgUp>
        <IconButton
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
