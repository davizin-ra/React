import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import Category, {categories, filterCategory} from "./components/Category";

function App() {
  return (
    <>
      <Header/>
      <Banner image= 'favoritos' />
      <Container>    

        <body>
          <h1>Etec MCM</h1>
          <p>É óbvio que foi erro teu o infeliz, eu sou o trem bala, o homem mais rápido do mundo</p>
        </body>

        {categories.map((category, index) =>
          <Category category={category}>
            {filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
          </Category>
        )}

      </Container>
      <Footer/>
    </>

  );
}

export default App;
