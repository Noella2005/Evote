import * as React from 'react';

import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



export default function Hero() {

  return (
    <Box
      id="aboutus"
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 15, sm: 15},
          pb: { xs: 15, sm: 15 },
        }}
      >
        <Stack spacing={5} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>

            <Typography
                textAlign="center"
                color="text.secondary"
                sx={{ alignSelf: 'center', width: { sm: '150%', md: '90%' } }}
            >
               <h2>About Us</h2> 

            </Typography>

          <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(1rem, 1vw, 1rem)',
            }}
          >
            E-vote is a platform that offers secure, transparent, and accessible online voting. It aims to make democracy more inclusive and efficient by leveraging modern technology. E-vote's mission is to empower voters, ensure security, promote transparency, and enhance participation. The platform is user-friendly, secure, and reliable, with real-time results and accessibility on various devices. The platform uses top-notch encryption and security protocols to protect voter data. E-vote's security is a top priority, using encryption, robust authentication methods, regular security audits, and industry standards. E-vote encourages users to join the movement to make every vote count and every voice heard, aiming to create a more inclusive, transparent, and efficient electoral process.
            
          </Typography>

        </Stack>
        
      </Container>
    </Box>
  );
}
