import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center font-bold mt-10">
            <div className="text-center font-bold mt-4 space-x-4">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            
        </div>
        </div>
    );
};

export default Header;