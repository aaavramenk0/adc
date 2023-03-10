import './Header.css';
import headerPhoto from '../images/HomePage/bg.jpg'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__content">
                <h1 className='company-name'> Avramenko <br /> Development <br /> Company </h1>
                <h2 className='company-slogan'>Build your successful online presence with us!</h2>
                
                <a href="#apply" className="apply-btn">Apply now</a>    
            </div>
            <img src={headerPhoto} className='header-photo' alt="Hands using laptop with virtual screen" />
        </header>
    )
}

export default Header;
