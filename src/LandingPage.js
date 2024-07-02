import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import getLPTheme from './components/getLPTheme';
import AboutUs from './components/AboutUs';

export default function LandingPage() {
  const LPtheme = createTheme(getLPTheme());

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Divider />
        <AboutUs />
        <Divider />
        <Highlights />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
