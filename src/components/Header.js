import logo from '../images/logo.svg';
export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" className="logo"/>
                <h4>my travel journal.</h4>
            </nav>

        </header>
    );
}