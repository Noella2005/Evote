import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Seamless Voting Process',
    description:
      'Our platform adapts to ensure a smooth and efficient voting experience, from start to finish.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Robust Security',
    description:
      'Enjoy peace of mind with our secure system, designed to protect your vote and ensure its integrity.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'User-Friendly Interface',
    description:
      'Cast your vote with ease using our intuitive and straightforward platform.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Cutting-Edge Technology',
    description:
      'Benefit from the latest advancements in voting technology, ensuring accuracy and reliability.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Dedicated Support',
    description:
      'Our responsive customer support team is here to assist you, every step of the way.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Transparent Results',
    description:
      'Trust in the clarity and transparency of our voting results, with every detail meticulously handled.',
  },
];


export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
         <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Discover why our voting platform is exceptional: seamless voting process, robust security, 
            user-friendly interface, cutting-edge technology, dedicated support, and transparent results.
          </Typography>

        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}