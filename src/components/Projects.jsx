import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Data from "../assets/Data.json";
import { Grid } from "@mui/material";

export default function Projects() {
  return (
    <Grid container spacing={2} wrap="wrap" rowGap={10} justifyContent="space-evenly"  id='Projects' style={{marginTop:'5%'}}>
        <Typography variant="h4" component="div" gutterBottom item width='100%'>
            Projects
        </Typography>
      {Data.map((data) => {
        return (
            <Card sx={{ maxWidth: 345 }} key={data.id} item >
              <CardMedia
                component="img"
                alt={data.title}
                height="140"
                image={data.imgurl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={data.websiteurl}>Learn More</Button>
              </CardActions>
            </Card>
            
          );
      })}
    </Grid>
  );
}
