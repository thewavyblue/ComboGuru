import "../index.css";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import "./ContentCard.css";

export default function CharacterContentCard(props) {
  return (
    <Card sx={{ minWidth: 160 }}>
      <CardActionArea>
        
        <StarIcon
          sx={{
            position: "absolute",
            right: 6,
            top: 6
          }}
        />

        <CardMedia
          component="img"
          style={{height: 250}}
          image={props.image}
          alt={props.name} />
          
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{ 
              display: 'inline',
              alignItems: 'center',
              pb: 2,
              }}>
              {props.name}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}