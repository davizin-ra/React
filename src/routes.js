import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import PGN from "./pages/PageNotFound";
import Favorites from "./pages/Favorites";
import Vcadastro from "./pages/VideoCadastro";
import FavoriteProvider from "./context/Favorite";


function AppRoutes(){

    return(

        <BrowserRouter>
        
            <FavoriteProvider>            
                <Routes>

                    <Route path = "/" element = {<Home></Home>}></Route>
                    <Route path = "/Watch/:id" element = {<Watch></Watch>}></Route>
                    <Route path = "/Search" element = {<Search></Search>}></Route>
                    <Route path = "/Favorites" element = {<Favorites></Favorites>}></Route>
                    <Route path = "/Cadastre" element = {<Vcadastro></Vcadastro>}></Route>
                    <Route path = "*" element = {<PGN></PGN>}></Route>

                 </Routes>
            </FavoriteProvider>


        </BrowserRouter>

    );

}

export default AppRoutes;