import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/todo">Todo</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
        </div>
    )
}
export default Navbar