import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Profile from './Profile';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { auth, db } from './firebase'; // Make sure to import your firebase setup
import { doc, getDoc, collection, onSnapshot } from 'firebase/firestore'; // Import necessary Firestore methods

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerComponent = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const drawerItems = [
  { text: 'Home', icon: <HomeIcon sx={{ color: '#2196F3' }} />, link: '/' },
  { text: 'Campaign', icon: <CampaignIcon sx={{ color: '#2196F3' }} />, link: '/Campaign' },
  { text: 'History', icon: <HistoryIcon sx={{ color: '#2196F3' }} />, link: '/history' },
  { text: 'Settings', icon: <SettingsIcon sx={{ color: '#2196F3' }} />, link: '/settings' },
  { text: 'Help', icon: <HelpIcon sx={{ color: '#2196F3' }} />, link: '/help' },
];


export default function Drawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // State for popover anchor
  const [notifications, setNotifications] = useState([]); // State for notifications

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("User is not logged in");
            window.alert("User is not logged in");
          }
        }
      });
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    // Set up Firestore listener for real-time notifications
    const notificationsRef = collection(db, 'Notifications');
    const unsubscribe = onSnapshot(notificationsRef, (snapshot) => {
      const newNotifications = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(newNotifications);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/Signin";
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    const results = mockSearch(searchQuery);
    setSearchResults(results);
  };

  const mockSearch = (query) => {
    const data = [
      { id: 1, title: 'Campaign 1' },
      { id: 2, title: 'Campaign 2' },
      { id: 3, title: 'Campaign 3' }
    ];
    return data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                href="./"
              >
                E-vote
              </Button>
          </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Welcome : {userDetails ? userDetails.firstName : 'Loading...'}
          </Typography>

          <Box sx={{ position: 'relative', borderRadius: 1, backgroundColor: 'white', mr: 2, display: 'flex' }}>
            <InputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
              sx={{ pl: 2, width: '200px' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <NotificationsIcon />
          </IconButton>
          <Profile />
        </Toolbar>
      </AppBar>
      <DrawerComponent variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map(({ text, icon, link }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to={link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  color: 'white',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: '#2196F3' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon sx={{ color: 'white' }}>
              {/* <ExitToAppIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItemButton>
        </List>
      </DrawerComponent>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container spacing={2}>
          {searchResults.map(result => (
            <Grid item xs={12} sm={6} md={4} key={result.id}>
              <Typography variant="body1">{result.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Popover for notifications */}
      <Popover
        id={id}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Notifications</Typography>
          <List>
            {notifications.map((notification) => (
              <ListItem key={notification.id}>
                <ListItemText primary={notification.message} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Box>
  );
}
