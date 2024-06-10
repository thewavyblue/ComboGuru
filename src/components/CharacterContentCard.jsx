import "../index.css";
import "./ComboHero.css";
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
        <div className="hero--gradient"></div>
        <CardMedia
          component="img"
          style={{
            height: "200px"
          }}
          image={props.image}
          alt={props.name} />
          
        <CardContent
          sx={{
            background: 'none',
            position: "absolute",
            bottom: "0",

          }}>
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