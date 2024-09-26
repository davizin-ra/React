import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PNG from "../PageNotFound";

function Watch(){
    const params = useParams()
    const video = videos.find((video) => { return video.id === params.id})
    if(!video){ return <PNG></PNG>}

    return(
       <>
       
      
       <Header></Header>
       <Container>

            <section className={styles.Watch}>

            <h1>Assistir</h1>

            <iframe 
                width="854" height="480" 
                src={`https://www.youtube.com/embed/${video.id}`} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

            </section>

       </Container>
       <Footer></Footer>
       
       </>
    );
}

export default Watch;