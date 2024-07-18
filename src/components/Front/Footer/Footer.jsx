import { Link } from 'react-router-dom';

const Footer = () => {
    return <footer className='bg-green-500 rounded-t-2xl flex lg:min-h-[80px] overflow-hidden'>
        <div className='md:responsive-container flex flex-col-reverse xl:flex-row md:items-center md:justify-between text-white w-full py-6 md:pt-4 md:pb-6 xl:py-0 gap-8 md:gap-2 xl:gap-0'>
            <span className="block px-6">
                © 2024 <a href="https://jules-giraud.xyz" className="hover:underline">Jules Giraud</a>. All Rights Reserved.
            </span>
            <ul className='flex flex-col md:flex-row md:items-center'>
                <ListItem to="/a-propos">A propos</ListItem>
                <ListItem to="/politique-de-confidentialite">Politique de confidentialité</ListItem>
                <ListItem to="/mentions-legales">Mentions légales</ListItem>
                <ListItem to="/contact">Contact</ListItem>
            </ul>
        </div>
    </footer>
}

export default Footer;

const ListItem = ({ children, ...props }) => <li className='last-of-type:-mr-6 shrink-0'><Link {...props} className='hover:underline px-6 py-2 md:py-4 block'>{children}</Link></li>
