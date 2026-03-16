import homeSecond from '../../assets/images/homeSecond.png'
import classes from '../../assets/css/home.module.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'

export default function HomeSecond() {
    return (
        <section className={classes.HomeSecond}>
            <div className={classes.secondBody}>
                <div className={classes.top}>
                    <div className="container">
                        <img src={homeSecond} alt="img" />
                    </div>
                </div>
                <div className="container">
                    <div className={classes.bottom}>
                        <img src={image1} alt="img" />
                        <img src={image2} alt="img" />
                        <img src={image3} alt="img" />
                        <img src={image4} alt="img" />
                        <img src={image5} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
