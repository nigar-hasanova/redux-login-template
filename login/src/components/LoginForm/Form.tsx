import classes from './form.module.css'
import eyeSvg from '../../assets/icons/eye.svg'
import google from '../../assets/icons/google.svg'
import git from '../../assets/icons/git.svg'
import fb from '../../assets/icons/fb.svg'
import { Link } from 'react-router-dom'

export default function Form() {
    return (
        <form action="" className={classes.form}>
            <div className={classes.formHeader}>
                <p>Your logo</p>
                <h1>Login</h1>
            </div>
            <div className={classes.inputs}>
                <div className={classes.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='username@gmail.com' />
                </div>
                <div className={classes.password}>
                    <div className={classes.passwordInp}>
                        <label htmlFor="password">Password</label>

                        <div className={classes.inputWrapper}>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />

                            <img
                                src={eyeSvg}
                                alt="eye"
                                className={classes.eyeIcon}
                            />
                        </div>
                    </div>
                    <Link to={'/'} className={classes.forgot}>Forgot Password?</Link>
                </div>
            </div>
            <button>Sign in</button>
            <div className={classes.formBottom}>
                <p>Or Continue With</p>
                <div className={classes.mediaIcons}>
                    <div className={classes.media}>
                        <img src={google} alt="google" />
                    </div>
                    <div className={classes.media}>
                        <img src={git} alt="git" />
                    </div>
                    <div className={classes.media}>
                        <img src={fb} alt="fb" />
                    </div>
                </div>
            </div>

            <div className={classes.formRegister}>
                <p>Don’t have an account yet?</p>
                <Link to={'/register'} className={classes.register}>Register for free</Link>
            </div>

        </form>
    )
}
