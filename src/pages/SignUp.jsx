import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    title: {
        color: 'blue',
        margin: '0 auto',
    },
    form: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        height: '480px',
        width: '350px',
        margin: '0 auto',
    },
})

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pass, set] = useState('password');
    const classes = useStyles()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted.')
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h1 className={classes.title}>Sign Up</h1>
            <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                label="Name"
            />
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                label="E-mail"
            />
            <TextField
                type={pass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                label="Password"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start" onClick={() => set(pass === 'password' ? 'text' : 'password')}>
                            <VisibilityIcon color="disabled" />
                        </InputAdornment>
                    ),
                }}
            />
            <Button type='submit' variant='outlined' color='primary'>Sign Up</Button>
        </form>

    )
}


export default SignUp;
