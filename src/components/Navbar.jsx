import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className='nav'>
                <a href="/" className='home'>Ethan Whitcher</a>
                <ul>
                    <li>
                        <a href='About Me' className='about'>About Me</a>
                    </li>
                    <li>
                        <a href='Skills' className='skills'>Skills</a>
                    </li>
                    <li>
                        <a href='Projects' className='projects'>Projects</a>
                    </li>
                    <li>
                        <a href='Contact' className='contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}