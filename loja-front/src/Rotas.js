import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import TelaInicial from "./pages/TelaInicial";
import Inserir from "./pages/TelaInserir";
import Atualizar from "./pages/TelaAtualizar";

export default function Rotas(){

    return(
        <Routes>
            <Route exact path="/" element={<TelaInicial />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/inserir" element={<Inserir />}/>
            <Route path="/atualizar" element={<Atualizar />}/>
        </Routes>
    )
}