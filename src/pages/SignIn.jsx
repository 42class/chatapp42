import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'


const useStyles = makeStyles({
    signInTitle: {
        color: 'blue',
        textAlign: 'center'
    },
    form: {
        background: 'rgba(100,100,100,0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0 auto',
        width: '350px',
        height: '400px',
    },
    signInButton: {
        height: '40px',
        width: '100px',
        margin: '0 auto'
    },

    signUpLink: {
        textAlign: 'center'
    },
    watchButton: {
        borderRadius: '50px',
        height: '60px',

    },
    openPass: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    password: {
        width: '100%'
    }



});

const SignIn = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [watchInPass, setWatchInPass] = useState('password')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }


    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h1 className={classes.signInTitle}>SignIn Page</h1>

            <TextField
                label='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className={classes.openPass}>
                <TextField className={classes.password}
                    label='Password'
                    type={watchInPass}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    color='primary'
                    className={classes.watchButton}
                    onClick={() => setWatchInPass(
                        watchInPass === 'password' ? 'text' : 'password')}>
                    watch
            </Button>
            </div>
            <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.signInButton}>
                signin
            </Button>
            <p className={classes.signUpLink}>アカウントをお持ちでない方はコチラ</p>




        </form>
    )
}

export default SignIn