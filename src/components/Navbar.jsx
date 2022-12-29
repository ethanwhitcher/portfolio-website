import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className='nav'>
                <a href="/" className='home'>Ethan Whitcher</a>
                <ul>
                    <li>
                        <a href='About Me'>About Me</a>
                    </li>
                    <li>
                        <a href='Skills'>Skills</a>
                    </li>
                    <li>
                        <a href='Projects'>Projects</a>
                    </li>
                    <li>
                        <a href='Contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}