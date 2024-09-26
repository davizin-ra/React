import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Category, {categorias, filterCategory} from "../../components/Category";
import ScrollTop from "../../components/ScroolTop";

function Home() {

  return (
    <>
      <ScrollTop></ScrollTop>
      <Header/>
      <Banner image="home" />
      <Container>

        {categorias.map((category, index) =>
          <Category category={category}>
            <Carousel>
            { filterCategory(index).map((video) => <Card id={video.id} key={video.id} /> )}
            </Carousel>
          </Category>
        )}

      </Container>      
      <Footer/>
    </>
  );
}

export default Home;

// teste