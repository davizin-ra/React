import styles from "./Card.module.css"

function Card({id}){
    return(
        <section className={styles.card}> 
            <a
                href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener" 
                target='_blank'>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG3kar6sgX0id-vAe-lNe1SwfWfA`} 
                alt="Capa"/>
            </a>
        </section>
    );
}

export default Card;