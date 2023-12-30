import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/FInal_Logo-1.webp'


const Header = () => {
    

    return (
            <div className="container">
                <div className='navigation_style'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/shop-turf'}>Shop Turf</Link>
                    <Link to={'/shop-plants'}>Shop Plants</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/'}><img src={logo} alt="RFG" /></Link>
                    <Link to={'/modeling'}>Modeling</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/calculator'}>Calculator</Link>
                    <Link to={'/faqs'}>FAQs</Link>
                    <Link className='btn btn-sm border' to={'/contact-us'}>Contact Us</Link>
                </div>
            </div>
    );
};

export default Header;