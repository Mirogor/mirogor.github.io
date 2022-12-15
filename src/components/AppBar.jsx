import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ChurchIcon from '@mui/icons-material/Church';
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";




function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();
  const pages = t("appBar", { returnObjects: true })
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [lang, setLang] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleLangButton = () => {
    setLang(!lang);
    i18n.changeLanguage(lang ? "ru" : "en");
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <React.Fragment>
      <AppBar  >
        <Container >
          <Toolbar >
            <ChurchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CULTURE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{

                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((p) => (
                  <MenuItem
                    component={Link}
                    to={p.route}
                    key={p.page}
                    onClick={handleCloseNavMenu}>

                    <Typography variant='body1' textAlign="center">{p.page}</Typography>

                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ChurchIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography

              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CULTURE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 5 }}>
              {pages.map((p) => (

                <Button
                  component={Link}
                  to={p.route}
                  key={p.page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {p.page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleLangButton}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {lang ? "RU" : "EN"}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;