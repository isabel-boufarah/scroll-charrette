import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/navBar.module.css'
import { useState } from 'react';

export default function NavBar() {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    const location = useLocation();

    return (
        <nav className={`${styles.nav} ${open ? styles.open : styles.close}`}>
            <svg onClick={toggle} width="24px" height="48px">
                <line x1="0" y1="1" x2="24" y2="1" style={{stroke: 'black', strokeWidth: '2px'}} />
                <line x1="0" y1="6" x2="24" y2="6" style={{stroke: 'black', strokeWidth: '2px'}} />
                <line x1="0" y1="11" x2="24" y2="11" style={{stroke: 'black', strokeWidth: '2px'}} />
            </svg>
            {open ? <div onClick={toggle}>
                <Link to="/" style={{fontWeight: location.pathname === '/' ? '500' : '300'}}>Home</Link>
                <Link to="/one" style={{fontWeight: location.pathname === '/one' ? '500' : '300'}}>One</Link>
                <Link to="/two" style={{fontWeight: location.pathname === '/two' ? '500' : '300'}}>Two</Link>
                <Link to="/three" style={{fontWeight: location.pathname === '/three' ? '500' : '300'}}>Three</Link>
                <Link to="/four" style={{fontWeight: location.pathname === '/four' ? '500' : '300'}}>Four</Link>
                <Link to="/five" style={{fontWeight: location.pathname === '/five' ? '500' : '300'}}>Five</Link>
                <Link to="/six" style={{fontWeight: location.pathname === '/six' ? '500' : '300'}}>Six</Link>
                <Link to="/seven" style={{fontWeight: location.pathname === '/seven' ? '500' : '300'}}>Seven</Link>
                <Link to="/eight" style={{fontWeight: location.pathname === '/eight' ? '500' : '300'}}>Eight</Link>
                <Link to="/nine" style={{fontWeight: location.pathname === '/nine' ? '500' : '300'}}>Nine</Link>
                <Link to="/ten" style={{fontWeight: location.pathname === '/ten' ? '500' : '300'}}>Ten</Link>
                <Link to="/eleven" style={{fontWeight: location.pathname === '/eleven' ? '500' : '300'}}>Eleven</Link>
                <Link to="/twelve" style={{fontWeight: location.pathname === '/twelve' ? '500' : '300'}}>Twelve</Link>
                <Link to="/thirteen" style={{fontWeight: location.pathname === '/thirteen' ? '500' : '300'}}>Thirteen</Link>
                <Link to="/fourteen" style={{fontWeight: location.pathname === '/fourteen' ? '500' : '300'}}>Fourteen</Link>
                <Link to="/fifteen" style={{fontWeight: location.pathname === '/fifteen' ? '500' : '300'}}>Fifteen</Link>
                <Link to="/sixteen" style={{fontWeight: location.pathname === '/sixteen' ? '500' : '300'}}>Sixteen</Link>
                <Link to="/seventeen" style={{fontWeight: location.pathname === '/seventeen' ? '500' : '300'}}>Seventeen</Link>
                <Link to="/eighteen" style={{fontWeight: location.pathname === '/eighteen' ? '500' : '300'}}>Eighteen</Link>
                <Link to="/nineteen" style={{fontWeight: location.pathname === '/nineteen' ? '500' : '300'}}>Nineteen</Link>
                <Link to="/twenty" style={{fontWeight: location.pathname === '/twenty' ? '500' : '300'}}>Twenty</Link>
                <Link to="/twentyone" style={{fontWeight: location.pathname === '/twentyone' ? '500' : '300'}}>Twenty One</Link>
                <Link to="/twentytwo" style={{fontWeight: location.pathname === '/twentytwo' ? '500' : '300'}}>Twenty Two</Link>
                <Link to="/twentythree" style={{fontWeight: location.pathname === '/twentythree' ? '500' : '300'}}>Twenty Three</Link>
                <Link to="/twentyfour" style={{fontWeight: location.pathname === '/twentyfour' ? '500' : '300'}}>Twenty Four</Link>
                <Link to="/twentyfive" style={{fontWeight: location.pathname === '/twentyfive' ? '500' : '300'}}>Twenty Five</Link>

            </div> : <></>}
        </nav>
    )
}