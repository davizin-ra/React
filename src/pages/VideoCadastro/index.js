import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Form from "../../components/Form";
import styles from "./Cadastro.module.css";


function Vcadastro(){

    return(

        <>
        
        <Header></Header>

       
        
        <Container >

            <section className={styles.cadastro}>
            <Form></Form>
            </section>
            
        </Container>
        
        <Footer></Footer>
        
        </>
    );

}

export default Vcadastro;