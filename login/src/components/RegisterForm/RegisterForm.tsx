import classes from '../LoginForm/form.module.css'
import eyeSvg from '../../assets/icons/eye.svg'
import google from '../../assets/icons/google.svg'
import git from '../../assets/icons/git.svg'
import fb from '../../assets/icons/fb.svg'
import { Link } from 'react-router-dom'
import { useSignUpMutation } from '../../store/apis/auth'
import { useState } from 'react'
import { toast } from 'react-toastify';


export default function Form() {
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, { isLoading }] = useSignUpMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            email,
            password,
            returnSecureToken: true
        }

        const result = await register(payload);

        if ('data' in result) {
            toast.success("Qeydiyyat uğurlu oldu");

        } else {
            toast.error(result.error?.data?.error?.message || "Xəta baş verdi ❌");
        }
        console.log(result);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formHeader}>
                <p>Your logo</p>
                <h1>Register</h1>
            </div>
            <div className={classes.inputs}>
                <div className={classes.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='username@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.password}>
                    <div className={classes.passwordInp}>
                        <label htmlFor="password">Password</label>

                        <div className={classes.inputWrapper}>
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <img
                                src={eyeSvg}
                                alt="eye"
                                className={classes.eyeIcon}
                                onClick={() => setShow(!show)}

                            />
                        </div>
                    </div>
                    <Link to={'/'} className={classes.forgot}>Forgot Password?</Link>
                </div>
            </div>
            <button type='submit' disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Sign up'}
            </button>
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
                <p>If you have an account, please</p>
                <Link to={'/login'} className={classes.register}>Login</Link>
            </div>

        </form>
    )
}
