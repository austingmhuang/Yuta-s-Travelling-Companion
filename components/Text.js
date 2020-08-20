import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const Text = props => {
  const classes = useStyles();
  const [fromText, setFromText] = useState("");
  console.log(fromText);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label={props.placeholder}
        onChange={e => setFromText(event.target.value)}
      />
    </form>
  );
};

export default Text;
