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
      id="hero"
      sx={(theme) => ({
        width: '100%',
        height: '100vh',
        // backgroundImage:
        //   theme.palette.mode === 'light'
        //     ? 'linear-gradient(180deg, #43h432, #FFF)'
        //     : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        // backgroundSize: '100% 100%',
        // backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 60, sm: 40},
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={5} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2rem)',
            }}
          >
            Empower Your Voice&nbsp;<br/>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(2rem, 5vw, 2rem)',
                pb: { xs: 3, sm: 3},
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Cast Your Votes
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Join our secure and easy-to-use online voting platform. Participate in elections from the comfort of your home, ensuring your voice is heard and your vote counts.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                href="SignUp"
              >
                Sign up
              </Button>
          </Stack>

        </Stack>
        
      </Container>
    </Box>
  );
}
