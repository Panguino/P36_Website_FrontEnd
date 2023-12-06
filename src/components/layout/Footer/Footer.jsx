import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={styles.Footer}>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
    )
}
