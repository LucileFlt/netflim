import iconPinterest from '../../assets/pinterest_2.png';
import iconFacebook from '../../assets/facebook_1.png';
import iconInstagram from '../../assets/instagram_1.png';
import iconTwitter from '../../assets/twitter_1.png';
import styles from './style.module.css';

const Reseaux =() =>{
    return(
        <div className={styles.reseaux}>
           <img src={iconPinterest} alt="icon pinterest" className= {iconPinterest} />
           <img src={iconFacebook} alt="icon facebook" className={iconFacebook} />
           <img src={iconInstagram} alt="icon instagram" className={iconInstagram} />
           <img src={iconTwitter} alt="icon twitter" className={iconTwitter} />
        </div>
)
    }

export default Reseaux;