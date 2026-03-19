import RegisterForm from '../../RegisterForm/RegisterForm'
import classes from '../login/login.module.css'
import loginImg from '../../../assets/images/loginImg.png'

export default function Register() {
    return (
        <>
            <section className={classes.login}>
                <div className='container'>
                    <div className={classes.loginBanner}>
                        <div className={classes.loginSide}>
                            <RegisterForm />
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
