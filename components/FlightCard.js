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

function FlightCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.gettyimages.com/photos/low-angle-view-of-airplane-flying-against-sky-during-sunset-picture-id969670982?s=612x612"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Leaving from
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h7">
            {props.flight.Places[0].Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Going to
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h7">
            {props.flight.Places[1].Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Departure date
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h7">
            {props.flight.Quotes[0].QuoteDateTime}
            {props.flight.Places[0].IataCode} -{" "}
            {props.flight.Places[1].IataCode}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Cheapest price USD
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h7">
            ${props.flight.Quotes[0].MinPrice}
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

export default FlightCard;
