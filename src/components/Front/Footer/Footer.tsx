import styles from './Footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content--left">
                        <h3 className="footer__content--title">FrontCook</h3>
                        <p className="footer__content--text">FrontCook is a recipe sharing platform where you can share your favorite recipes with the world.</p>
                    </div>
                    <div className="footer__content--right">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
