import Form from '../../LoginForm/Form'
import classes from './login.module.css'
import loginImg from '../../../assets/images/loginImg.png'

export default function Login() {
    return (
        <>
            <section className={classes.login}>
                <div className='container'>
                    <div className={classes.loginBanner}>
                        <div className={classes.loginSide}>
                            <Form />
                        </div>
                        <div className={classes.imgSide}>
                            <img src={loginImg} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
