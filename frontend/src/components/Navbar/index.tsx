import {ReactComponent as GithubIcon} from "../../assets/img/github.svg";
import './styles.css';
function Navbar() {

    return (
        <header>
            <nav className={"container"}>
                <div className={"dsmovie-nav-content"}>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/rick010">
                        <div className={"dsmovie-contact-container"}>
                            <GithubIcon />
                            <p className={"dsmovie-contact-link"}>/github-Ricardo Carvalho</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;