import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <Link to="/">Company Logo</Link>
            <Link to="/">Home</Link>
            <Link to="/companya">Company</Link>
            <Link to="/about">About</Link>
        </div>

    )
}
export default Navbar;