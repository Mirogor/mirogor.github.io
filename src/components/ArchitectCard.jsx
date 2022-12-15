import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

export default function ArchitectCard({ architect, l }) {

  return (
    <Card sx={{ maxWidth: "full" }}>
      <CardActionArea component={Link}
        to={l}>
        <CardMedia

          width="100%"
          component="img"
          height="350"
          image={architect.avatar}
          alt="architect"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {architect.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {architect.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}