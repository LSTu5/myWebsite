import { useLocation } from 'react-router-dom';
import Logo from '../imgs/logo.png'; // Assuming you have the logo image imported

export function Navbar() {
    let location = useLocation();

    return (
        <nav className={`navbar ${location.pathname !== '/' ? 'navbar-scroll' : ''}`}>
            <div className="bg-transparent flex justify-between items-center px-4 py-6 md:px-8 lg:px-16">
                <div className="flex items-center">
                    <img src={Logo} className="h-20 mr-10" alt="Logo" /> {/* Adjust the image height as needed */}
                    <h1 className="text-xl font-bold font-sans text-gray-100">Luke</h1>
                </div>
                <ul className="flex space-x-10 text-gray-100 font-sans">
                    <li>
                        <a href="/work" className={`text-lg font-bold ${location.pathname === '/work' ? 'text-gray-500' : 'hover:text-gray-400'}`}>WORK</a>
                    </li>
                    <li>
                        <a href="/resume" target="_blank" rel="noopener noreferrer" className={`text-lg font-bold ${location.pathname === '/resume' ? 'text-gray-500' : 'hover:text-gray-400'}`}>RESUME</a>
                    </li>
                    <li>
                        <a href="/about" className={`text-lg font-bold  ${location.pathname === '/about' ? 'text-gray-500' : 'hover:text-gray-400'}`}>ABOUT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;