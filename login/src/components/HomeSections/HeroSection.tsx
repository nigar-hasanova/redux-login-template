import classes from '../../assets/css/home.module.css'
import heroImg from '../../assets/images/heroImg.png'

export default function HeroSection() {
    return (
        <section className={classes.hero}>
            <div className="container">
                <div className={classes.heroBody}>
                    <div className={classes.leftSide}>
                        <h1>Track your Expenses to Save Money</h1>
                        <p>Helps you to organize your income and expenses</p>
                        <div className={classes.leftBottom}>
                            <button>Try free demo</button>
                            <p>— Web, iOs and Android</p>
                        </div>
                    </div>
                    <div className={classes.ImgSide}>
                        <img src={heroImg} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
