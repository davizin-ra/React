import styles from "./PGN.module.css";  
import erro404 from "./erro404.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PGN(){

    return(
       <>
        <Header></Header>

        <section className={styles.container}>

        <h2>Ops! Não é por aqui</h2>

        <img src ={erro404} alt=""></img>
        
        </section>

        <Footer></Footer>
       </>
    );

}

export default PGN;