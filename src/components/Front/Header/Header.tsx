// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//navlink marche comme un lien mais il ajoute une classe active contrairement à Link qui ne le fait pas
// import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.masthead}>
            <div className="wrap">
                <div className="d-flex justify-content-space-between">
                    <div className="logo">LOGO</div>
                    <nav>
                        <ul>
                            <li> <NavLink to="/" activeClassName={styles.active}>Home</NavLink></li>
                            {/* <li><a href="/molki">Molki</a></li> */}
                            <li><NavLink to="/molki" activeClassName={styles.active}>Molki</NavLink></li> 
                            <li><NavLink to="/profil" activeClassName={styles.active}>Profil</NavLink></li>
                            <li><NavLink to="/login" activeClassName={styles.active}>Login</NavLink></li>
                            <li><NavLink to="/admin/category">Category</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;