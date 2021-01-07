import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  card: {
    margin: "15px",
    padding: "15px",
    backgroundColor: "#7fbfff",
  },
});

const Item = ({ user, content }) => {
  const classes = useStyles();
  return <Card className={classes.card}>{`${user} : ${content}`}</Card>;
};

export default Item;
