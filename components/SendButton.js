import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#94DFDA",
      color: "#94DFDA",
      fontWeight: 800,
      marginBottom: "8px",
      textAlign: "center",
      "&:hover": {
        backgroundColor: "#94DFDA",
        color: "#fff"
      }
    }
  })
);

const SendButton = props => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.func(props.view)}
    >
      {props.text}
    </Button>
  );
};

export default SendButton;
