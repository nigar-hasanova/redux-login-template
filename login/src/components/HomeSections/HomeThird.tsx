import classes from '../../assets/css/home.module.css'
import homeThird from '../../assets/images/homeThird.png'


export default function HomeThird() {
    return (
        <section className={classes.homeThird}>
            <div className="container">
                <div className={classes.heroBody}>
                    <div className={classes.leftSide}>
                        <p>Alwalys online</p>
                        <h1>Real-time support with cloud</h1>
                        <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
                        <div className={classes.leftBottom}>
                            <button>Try free demo</button>
                        </div>
                    </div>
                    <div className={classes.ImgSide}>
                        <img src={homeThird} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
