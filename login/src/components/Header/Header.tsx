import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <section className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <div>x</div>
                        <p>pense</p>
                    </div>
                    <ul className="menu">
                        <li>
                            <NavLink to={'/'} className='navlink'> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} className='navlink'> About us</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} className='navlink'> Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} className='navlink'> Features</NavLink>
                        </li>
                    </ul>
                    <NavLink to={'/login'} className="navBtn">
                        <button>Login</button>
                    </NavLink>
                </nav>
            </div>
        </section>
    )
}
