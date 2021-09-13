import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import SuaveStarIcon from '../../assets/suavestarIcon.png'
import '../../styles/GeneralComponents/layout.scss'
import { useState } from 'react';

const Layout = ({
    icon = true,
    searchBar = true,
    nav = true,
    children = <h2>pasale el children gil</h2>,
    footer = true
}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <main className="layout__main">
            <header className='layout__header'>
                {icon && (
                    <div className="layout__header--iconContainer">
                        <img src={SuaveStarIcon} />
                    </div>
                )}
                {nav && (
                    <nav className="layout__header--navContainer">
                        <li>
                            <ul><Link to='/'>Inicio</Link></ul>
                        </li>
                        <li>
                            <ul><Link to='/productos'>Productos</Link></ul>
                        </li>
                        <li>
                            <ul><Link to='/nosotros'>Nosotros</Link></ul>
                        </li>
                        <li>
                            <ul><Link to='/admin'>Admin</Link></ul>
                        </li>
                    </nav>
                )}
                {searchBar && (
                    <div className="layout__header--SearchBarContainer">
                        <input 
                            type="search"
                            placeholder='¿Qué está buscando?'
                            onChange={({target:{value}}) => setInputValue(value)} 
                            value={inputValue}
                        />
                    </div>
                )}
            </header>
            <section className='layout__section'>
                {children}
            </section>
            <footer className='layout__footer'>
                <div className="layout__footer--links">
                    <Link to='/'>
                        Inicio
                    </Link>
                    <Link to='/productos'>
                        Productos
                    </Link>
                    <Link to='/nosotros'>
                        Nosotros
                    </Link>
                </div>
                <div className="layout__footer--socialIcons">
                    <Link to='/'>
                        <FaFacebookF/>
                    </Link>
                    <Link to='/productos'>
                        <FaInstagram />
                    </Link>
                    <Link to='/nosotros'>
                        <FaTwitter />
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default Layout;