import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";
import { UseFavoriteContext } from "../../context/Favorite";

function Card({ id }) {

    const { favorite, addFavorite} = UseFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? iconUnfavorite : iconFavorite

    return (
        <section className={styles.card}>
            <Link to = {`/Watch/${id}`}>

                <img src= {`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa}/>

            </Link>
            <figure className={styles.icon}>
                <img src={icone} 
                alt=""
                onClick={() => addFavorite({id})}
                ></img>
            </figure>
        </section>
    );
}

export default Card;