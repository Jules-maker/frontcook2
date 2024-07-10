import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <footer className="shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">
                    © 2024 <a href="#" className="hover:underline">Jules Giraud</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/licensing" className="hover:underline me-4 md:me-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
