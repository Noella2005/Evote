import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Container, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Drawer from './Drawer';
import ActionAreaCard from './Card'; // Adjust the import path as necessary
import Polls from './Polls';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import getLPTheme from './getLPTheme';

function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/campaign/${id}`);
  };

  const handleCreateCampaignClick = () => {
    navigate('/CreateCampaign');
  };

  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    // auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const docRef = doc(db, "Users", user.uid);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //       setUserDetails(docSnap.data());
    //       console.log(docSnap.data());
    //     } else {
    //       console.log("User data does not exist.");
    //     }
    //   } else {
    //     console.log("User is not logged in.");
    //     window.alert("User is not logged in.");
    //   }
    // });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const campaigns = [
    { id: 1, title: 'Campaign 1', description: 'Description for Campaign 1' },
    { id: 2, title: 'Campaign 2', description: 'Description for Campaign 2' },
    { id: 3, title: 'Campaign 3', description: 'Description for Campaign 3' },
    // Add more campaigns as needed
  ];

  return (
    <Box sx={{ display: 'flex', pt: '50px' }}>
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Recently Uploaded Campaigns
          </Typography>
          <Grid container spacing={3}>
            {campaigns.map((campaign) => (
              <Grid item xs={12} sm={4} key={campaign.id}>
                <ActionAreaCard
                  id={campaign.id}
                  title={campaign.title}
                  description={campaign.description}
                  onClick={() => handleCardClick(campaign.id)}
                />
              </Grid>
            ))}
          </Grid>
          <Polls />
          <Button variant="contained" color="primary" component="a" href='./CreateCampaign' sx={{ mt: 3 }}>
            Create Campaign
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
