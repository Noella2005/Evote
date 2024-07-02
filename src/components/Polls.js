import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from 'chart.js';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Polls() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    // Fetch poll data and update state
    // Replace with your actual data fetching logic
    const fetchPolls = async () => {
      // Example data
      const fetchedPolls = [
        { id: 1, title: 'Poll 1', votes: [5, 10, 2] },
        { id: 2, title: 'Poll 2', votes: [3, 8, 6] },
      ];
      setPolls(fetchedPolls);
    };

    fetchPolls();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Polls
      </Typography>
      {polls.length === 0 ? (
        <Typography variant="body1">No polls found.</Typography>
      ) : (
        <Grid container spacing={2}>
          {polls.map((poll) => (
            <Grid item xs={12} key={poll.id}>
              <Typography variant="h6">{poll.title}</Typography>
              <Box sx={{ width: '100%', height: 300 }}> {/* Adjust the height as needed */}
                <Bar
                  data={{
                    labels: ['Candidate 1', 'Candidate 2', 'Candidate 3'],
                    datasets: [
                      {
                        label: 'Votes',
                        data: poll.votes,
                        backgroundColor: 'rgba(33, 150, 243, 0.7)', // #2196F3 with 0.4 opacity
                        borderColor: 'rgba(33, 150, 243, 2)',      // #2196F3 with full opacity
                        borderWidth: 1,
                      }
                      
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                  height={150} // Adjust the height as needed
                  width={250} // Adjust the width as needed
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
