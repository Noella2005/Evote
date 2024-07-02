// import React, { useState, useEffect } from 'react';
// import { Typography, Box, Container } from '@mui/material';
// // import { useAuth } from './authContext'; // Make sure you have an auth context that provides user info
// import { db } from './firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';

// const VotingHistory = () => {
//   const [votingHistory, setVotingHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useAuth(); // Ensure you have an Auth context providing user info

//   useEffect(() => {
//     const fetchVotingHistory = async () => {
//       if (!user) {
//         setLoading(false);
//         return;
//       }
      
//       const q = query(collection(db, 'votes'), where('userId', '==', user.uid));
//       const querySnapshot = await getDocs(q);
      
//       const votes = [];
//       querySnapshot.forEach((doc) => {
//         votes.push({ id: doc.id, ...doc.data() });
//       });

//       setVotingHistory(votes);
//       setLoading(false);
//     };

//     fetchVotingHistory();
//   }, [user]);

//   if (loading) {
//     return (
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4">Loading...</Typography>
//       </Box>
//     );
//   }

//   if (votingHistory.length === 0) {
//     return (
//       <Box sx={{ mt: 4, textAlign: 'center' }}>
//         <Typography variant="h4">No Voting History</Typography>
//         <Typography variant="body1">Participate in a voting campaign to see your history.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Container>
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom>Your Voting History</Typography>
//         {votingHistory.map((vote) => (
//           <Box key={vote.id} sx={{ mb: 2 }}>
//             <Typography variant="h6">Campaign: {vote.campaignId}</Typography>
//             <Typography variant="body1">Vote: {vote.vote}</Typography>
//             <Typography variant="body2">Date: {new Date(vote.timestamp).toLocaleString()}</Typography>
//           </Box>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default VotingHistory;
