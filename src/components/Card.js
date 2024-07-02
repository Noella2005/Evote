import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardActionArea, CardActions, Button } from '@mui/material';

export default function ActionAreaCard({ id, title, description, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/campaign/${id}`);
  };

  return (
<Card
  sx={{
    maxWidth: 345,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: 'white'
  }}
  onClick={handleClick}
>
        <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" sx={{ color: 'white' }}>
          Vote
        </Button>
      </CardActions>
    </Card>
  );
}
