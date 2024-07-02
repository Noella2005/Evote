import React, { useState } from 'react';
import { Box, Typography, Divider, Switch, FormControlLabel, TextField, MenuItem, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Settings() {
  // State hooks for managing settings
  const [notifications, setNotifications] = useState(false);
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState(14);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [email, setEmail] = useState('user@example.com');
  const [privacy, setPrivacy] = useState(false);

  // Handlers for toggling settings
  const handleToggle = (setter) => (event) => {
    setter(event.target.checked);
  };

  // Handlers for changing input values
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Handler for saving settings
  const handleSaveSettings = () => {
    // Save settings logic here
    alert('Settings saved successfully!');
  };

  const Theme = useTheme();

  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: '600px' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      {/* Notifications Settings */}
      <Typography variant="h6">Notifications</Typography>
      <FormControlLabel
        control={<Switch checked={notifications} onChange={handleToggle(setNotifications)} />}
        label="Enable Notifications"
      />
      
      <Divider sx={{ my: 2 }} />
      
      {/* Language Settings */}
      <Typography variant="h6">Language</Typography>
      <TextField
        select
        label="Select Language"
        value={language}
        onChange={handleInputChange(setLanguage)}
        fullWidth
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        {/* Add more languages as needed */}
      </TextField>
      
      <Divider sx={{ my: 2 }} />
      
      {/* Accessibility Settings */}
      <Typography variant="h6">Accessibility</Typography>
      <TextField
        label="Font Size"
        type="number"
        value={fontSize}
        onChange={handleInputChange(setFontSize)}
        fullWidth
      />
      
      <Divider sx={{ my: 2 }} />
      
      {/* Security Settings */}
      <Typography variant="h6">Security</Typography>
      <FormControlLabel
        control={<Switch checked={twoFactorAuth} onChange={handleToggle(setTwoFactorAuth)} />}
        label="Enable Two-Factor Authentication"
      />
      
      <Divider sx={{ my: 2 }} />
      
      {/* Account Management */}
      <Typography variant="h6">Account Management</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleInputChange(setEmail)}
        fullWidth
      />
      
      <Divider sx={{ my: 2 }} />
      
      {/* Privacy Settings */}
      <Typography variant="h6">Privacy Settings</Typography>
      <FormControlLabel
        control={<Switch checked={privacy} onChange={handleToggle(setPrivacy)} />}
        label="Enable Privacy Mode"
      />
      
      <Divider sx={{ my: 2 }} />
      
      <Button variant="contained" color="primary" onClick={handleSaveSettings}>
        Save Settings
      </Button>
    </Box>
  );
}
