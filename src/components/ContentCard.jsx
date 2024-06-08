import "../index.css";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import "./ContentCard.css";

export default function ActionAreaCard(props) {
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
          alt={props.title} />
          
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
              {props.title}
          </Typography>
          <Grid 
            container 
            columnSpacing={{ 
              xs: 0.5, 
              sm: 1,
            }}
            pt={2}
          >
            {props.platforms.map((platform, i) => {
              return (
                <Grid item xs={2} sm={1} md={1} key={i} >
                  <img src={platform} alt="platform icon" type="svg/image" />
                </Grid>
              )
            })
            }
          </Grid>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}