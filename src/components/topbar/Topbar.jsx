import "./topbar.scss"
import {Person} from "@material-ui/icons"
import {Mail} from "@material-ui/icons"
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Maarten Veenstra</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+31 06 3465 2960</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>maarten.veenstra@hotmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>

                </div>
            </div>
            </div>
        </div>
    )
}
