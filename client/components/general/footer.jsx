import { useDarkMode } from '../../hooks/useDarkModeContext';

export default function Footer() {
    const { darkMode } = useDarkMode();

    return (
        <div className={darkMode ? 'dark' : ''}>
            <footer className="dark:bg-gray-800 flex flex-col text-sm justify-center">
                <h3 className="dark:text-neutral-300 text-gray-400 mt-5 text-center">© 2024 不老傳說 | All Rights Reserved</h3>
                {/* <h4 className="dark:text-neutral-300 text-gray-400 text-center mb-5">Developed by: Andre Arcaina, Tristan Cheng, Jack Heintz, Joseph Leung, and Felipe Quiroga</h4> */}
            </footer>            
        </div>
    );
}