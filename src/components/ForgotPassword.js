// ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'
import { auth } from './firebase';
import { Container,Typography,TextField,Button,Grid,Link,Avatar,CssBaseline,Box,} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { sendPasswordResetEmail } from 'firebase/auth';




const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
      setError('');
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
      setMessage('');
    }
  };

  const Theme = useTheme();

  return (
    <ThemeProvider theme={useTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          {emailSent ? (
            <Typography sx={{ mt: 3 }} variant="body1">
              An email has been sent to {email}. Follow the instructions to reset your password.
            </Typography>
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Reset Email
              </Button>
            </Box>
          )}
          {error && (
            <Typography sx={{ mt: 2 }} color="error">
              {error}
            </Typography>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Back to Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
