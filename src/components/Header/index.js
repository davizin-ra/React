import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header} >

            <Link to="/">
            <span>ETECFLIX</span> 
            </Link>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Search">Pesquisar</Link>
                <Link to="/Favorites">Favoritos</Link>
                <Link to="/Cadastre">Cadastro</Link>
                
            </nav>
        </header>
    );
}

export default Header;