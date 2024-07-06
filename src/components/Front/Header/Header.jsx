import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/logo-min.svg';
const Header = () => {
    return (
        <header className={`${styles.masthead} flex `}>
                <nav className='flex  justify-center  items-center'>
                    <ul className='flex justify-center'>
                        <li className=''> <Link to="/"><img src={logo} alt="logo cookerApp" /></Link></li>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/">Vos commandes</Link></li>
                        <li><Link to="/molki">Les Chefs</Link></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;