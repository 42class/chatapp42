 import {TextField,Button} from '@material-ui/core'
 import {useState} from 'react';

const Room =()=>{
    const [text,setText]=useState('');
return
(   <>
        <h1>Chat Room</h1>
        <form>
            <TextField value={text} onChange={e=>setText(e.target.value)} label="Write your message." variant="outlined" />
            <Button>Submit</Button>
        </form>
        <button>Log out</button>
    </>
);
}

export default Room;