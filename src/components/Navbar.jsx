import "./Navbar.css";
import { MdOutlineDashboard } from "react-icons/md";
const LINKS = [
    {
        to: "/",
        title: "Əsas səhifə",
    },
    {
        to: "/",
        title: "Xidmətlər",
    },
    {
        to: "/",
        title: "Haqqımda",
    },
    {
        to: "/",
        title: "Əlaqə",
    },
];
function Navbar() {
    return (
    <header className="navbar">
        <nav className="navbar-nav container">
            <div className="logo">
                <div className="logo-icon">
                    <MdOutlineDashboard size={32}/>
                </div>
                <div className="logo-text">Lup.az</div>
            </div>
            <ul className="links">
                {LINKS.map((link, index) => (
                    <li key={index}>
                        <a href={link.to}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;