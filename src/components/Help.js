import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Help = () => {
  const theme = useTheme();
  console.log(theme); // Check the theme object for expected values

  return (
    <Container maxWidth="md" sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Help Center
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Frequently Asked Questions (FAQs)
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary="How do I vote?"
              secondary="Explanation of the voting process."
              primaryTypographyProps={{ color: theme.palette.text.primary }}
              secondaryTypographyProps={{ color: theme.palette.text.secondary }}
            />
          </ListItem>
          {/* Other FAQs */}
        </List>

        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Troubleshooting Guides
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary="Troubleshooting login issues"
              secondary="Steps to resolve login problems."
              primaryTypographyProps={{ color: theme.palette.text.primary }}
              secondaryTypographyProps={{ color: theme.palette.text.secondary }}
            />
          </ListItem>
          {/* Other guides */}
        </List>

        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
          For further assistance, please contact our support team:
          <br />
          Email: support@yourvotingapp.com
          <br />
          Phone: +1234567890
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Report Issues
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
          To report any issues or bugs, please send an email to issues@yourvotingapp.com with detailed information.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Technical Assistance
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
          Visit our <a href="/technical-support" style={{ color: theme.palette.primary.main }}>Technical Support</a> page for additional resources and documentation.
        </Typography>
      </Box>
    </Container>
  );
};

export default Help;
