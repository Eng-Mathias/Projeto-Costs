import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li ><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copyRigth}>
                <span>Costs</span> &copy; 2025
            </p>
        </footer>
    )
}
export default Footer