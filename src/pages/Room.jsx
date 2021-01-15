import { TextField, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import { useState } from "react";
import Item from "../components/Item";

const useStyles = makeStyles({
  title: {
    color: 'black',
    margin: '0 auto',
    textAlign: 'center'
    
  },
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: '0 auto 20px',
  },
  chatRoomWrapper:{
    backgroundColor:'white',
    justifyContent:'center',
    margin:'0 auto',
    textAlign:'center',
    width:'500px'
  }
})

const Room = () => {
  const classes=useStyles();
  const [text, setText] = useState("");
  return (
    <div className={classes.chatRoomWrapper}>
      <h1 className={classes.title}>Chat Room</h1>
      <Item user={"kei"} content={"あいうえお"}/>
      <form className={classes.form}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Write your message."
          variant="outlined"
        />
        <Button variant="contained" color="secondary">Submit</Button>
      </form>
      <Button className={classes.button} variant="containe" color="primary">Log out</Button>
    </div>
    
  );
};

export default Room;

//color info, git graph,indent rainbow,prettier,react snippet
