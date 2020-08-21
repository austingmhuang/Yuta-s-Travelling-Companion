import styles from "../styles/FlightCard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function FlightCard4(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s1.1zoom.me/big0/267/Airplane_Sky_Clouds_450930.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Leaving from
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h7">
            {props.flight.Places[1].Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Going to
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h7">
            {props.flight.Places[0].Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Departure date
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h7">
            2020-08-21 T11:55:00SFO-JFK
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Cheapest price USD
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h7">
            $310
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default FlightCard4;
