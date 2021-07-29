
import './header.css'
import img3 from '../assets/img.jpg'
function Header(){
    return(
        <div className="header">
            this is header
            <img src={img3 } alt="zahid" />
        </div>
    )
}
// export function Footer(){
//     {
//         return(
//             <div>this is footer</div>
//         )
//     }
// }
export default Header;
