import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.masthead}>
            <div className="wrap">
                <div className="d-flex justify-content-space-between">
                    <div className="logo">LOGO</div>
                    <nav>
                        <ul>
                            <li> <Link to="/">Home</Link></li>
                            {/* <li><a href="/molki">Molki</a></li> */}
                            <li><Link to="/molki">Molki</Link></li> 
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;