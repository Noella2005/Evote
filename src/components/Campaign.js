import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function CreateCampaign() {
  const theme = useTheme();

  const [campaignDetails, setCampaignDetails] = useState({
    name: '',
    purpose: '',
    numberOfCandidates: 0,
  });
  const [candidates, setCandidates] = useState([]);
  const [endDate, setEndDate] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignDetails({
      ...campaignDetails,
      [name]: value,
    });
  };

  const handleCandidateChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCandidates = [...candidates];
    updatedCandidates[index] = {
      ...updatedCandidates[index],
      [name]: value,
    };
    setCandidates(updatedCandidates);
  };

  const handleNumberOfCandidatesChange = (e) => {
    const numberOfCandidates = parseInt(e.target.value, 10);
    setCampaignDetails({ ...campaignDetails, numberOfCandidates });
    const newCandidates = Array(numberOfCandidates).fill({
      name: '',
      age: '',
      gender: '',
      picture: '',
      occupation: '',
      region: '',
    });
    setCandidates(newCandidates);
  };

  const handleSubmit = async () => {
    try {
      const campaignRef = await addDoc(collection(db, 'campaigns'), {
        ...campaignDetails,
        candidates,
        endDate,
      });
      console.log('Campaign successfully created with ID: ', campaignRef.id);
    } catch (e) {
      console.error('Error adding campaign: ', e);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Create a New Campaign
        </Typography>
        <TextField
          label="Name of Campaign"
          name="name"
          variant="outlined"
          fullWidth
          value={campaignDetails.name}
          onChange={handleInputChange}
          sx={{ mb: 2, input: { color: theme.palette.text.primary } }}
        />
        <TextField
          label="Purpose of Campaign"
          name="purpose"
          variant="outlined"
          fullWidth
          value={campaignDetails.purpose}
          onChange={handleInputChange}
          sx={{ mb: 2, input: { color: theme.palette.text.primary } }}
        />
        <TextField
          label="Number of Candidates"
          name="numberOfCandidates"
          variant="outlined"
          type="number"
          fullWidth
          value={campaignDetails.numberOfCandidates}
          onChange={handleNumberOfCandidatesChange}
          sx={{ mb: 2, input: { color: theme.palette.text.primary } }}
        />
        {candidates.map((candidate, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Candidate {index + 1}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={candidate.name}
                  onChange={(e) => handleCandidateChange(index, e)}
                  sx={{ input: { color: theme.palette.text.primary } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Age"
                  name="age"
                  variant="outlined"
                  fullWidth
                  value={candidate.age}
                  onChange={(e) => handleCandidateChange(index, e)}
                  sx={{ input: { color: theme.palette.text.primary } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Gender"
                  name="gender"
                  variant="outlined"
                  fullWidth
                  value={candidate.gender}
                  onChange={(e) => handleCandidateChange(index, e)}
                  sx={{ input: { color: theme.palette.text.primary } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Picture"
                  name="picture"
                  variant="outlined"
                  fullWidth
                  value={candidate.picture}
                  onChange={(e) => handleCandidateChange(index, e)}
                  sx={{ input: { color: theme.palette.text.primary } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Occupation"
                  name="occupation"
                  variant="outlined"
                  fullWidth
                  value={candidate.occupation}
                  onChange={(e) => handleCandidateChange(index, e)}
                  sx={{ input: { color: theme.palette.text.primary } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Region"
                  name="region"
                  variant="outlined"
                  fullWidth
                  value={candidate.region}
                  onChange={(e) => handleCandidateChange(index, e)}
                  sx={{ input: { color: theme.palette.text.primary } }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <TextField
          label="End Date"
          name="endDate"
          variant="outlined"
          type="date"
          fullWidth
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          sx={{ mb: 2, input: { color: theme.palette.text.primary } }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Publish Campaign
        </Button>
      </Box>
    </Container>
  );
}
