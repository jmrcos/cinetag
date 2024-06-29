import Favoritos from "./pages/Favoritos";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Inicio from "pages/Inicio";

const AppRoutes = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PaginaBase />}>
                        <Route index element={<Inicio/>}></Route>
                        <Route path='favoritos' element={<Favoritos/>}></Route>
                        <Route path=":id" element={<Player/>}></Route>
                        <Route path='*' element={<NaoEncontrada/>}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes