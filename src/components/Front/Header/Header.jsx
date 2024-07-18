import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-min.svg';
import Icon from '../../../components/Icon/Icon';
import styles from './Header.module.scss';

const Header = () => {
    const [state, setState] = useState(false)

    return <header className={`md:bg-green-500 h-28 md:h-32 rounded-b-2xl z-50 isolate sticky top-0 left-0 shadow-xl`}>
        <nav className='md:responsive-container flex justify-between items-center h-full relative z-40'>
            <div className='bg-green-500 w-full md:w-auto h-28 md:h-32 rounded-b-2xl flex items-center justify-between px-6 z-20'>
                <Link to="/" className='block'>
                    <img src={logo} alt="logo cookerApp" className='size-16' />
                </Link>
                <button onClick={() => setState(!state)} className='size-12 border border-white rounded-xl flex md:hidden flex-col items-center justify-center gap-1.5 relative'>
                    <span className={`w-6 h-0.5 bg-white rounded-full duration-150 ease-out absolute ${state ? "rotate-45" : "-translate-y-[4px]"}`} />
                    <span className={`w-6 h-0.5 bg-white rounded-full duration-150 ease-out absolute ${state ? "-rotate-45" : "translate-y-[4px]"}`} />
                </button>
            </div>
            <ul className={`flex flex-col md:flex-row md:items-center text-white text-2xl md:text-lg absolute top-0 left-0 w-full md:w-auto md:static rounded-b-2xl bg-green-700 md:bg-transparent pt-40 md:pt-0 duration-300 ease-out overflow-hidden shadow-xl md:shadow-none ${state ? "" : "-translate-y-full md:translate-y-0"}`}>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/order">Vos commandes</NavItem>
                <NavItem to="/molki">Les Chefs</NavItem>
                <div className='md:items-center gap-6 flex flex-col md:hidden mt-8 px-6 bg-white text-green-700 py-8'>
                    <Link to="/login" className='flex gap-4 items-center'>
                        <Icon name="user-stroke" className="size-8 fill-green-700" fill="auto" />
                        Connexion
                    </Link>
                    <Link to="/logout" className='flex gap-4 items-center'>
                        <Icon name="logout" className="size-8 fill-green-700" fill="auto" />
                        Se déconnecter
                    </Link>
                </div>
            </ul>
            <div className='items-center gap-6 hidden md:flex'>
                <Link to="/login"><Icon name="user-stroke" className="size-8" /></Link>
                <Link to="/logout"><Icon name="logout" className="size-8" /></Link>
            </div>
        </nav>
    </header>
};

export default Header;

const NavItem = ({ children, ...props }) => <li>
    <Link {...props} className='px-6 py-3 hover:underline block'>{children}</Link>
</li>