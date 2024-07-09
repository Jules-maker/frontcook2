import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/logo-min.svg';
import loginIcon from '../../../assets/login.svg';
import logoutIcon from '../../../assets/logout.svg';
const Header = () => {
    return (
        <header className={`${styles.masthead} flex`}>
            <nav className='flex justify-between items-center w-full'>
                <div className='flex items-center ml-4'>
                    <Link to="/"><img src={logo} alt="logo cookerApp" className='w-1/2'/></Link>
                </div>
                <ul className='flex justify-center flex-grow'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Vos commandes</Link></li>
                    <li><Link to="/molki">Les Chefs</Link></li>
                </ul>
                <div className='flex items-center mr-4 gap-2'>
                    <Link to="/login"><img src={loginIcon} alt="Login" className='w-8 h-8'/></Link>
                    <Link to="/logout"><img src={logoutIcon} alt="Logout" className='w-8 h-8 ml-4'/></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;