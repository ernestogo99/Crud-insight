import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mymenu from "./menu";
import Cadastrar from "./cadastrar";
import Listar from "./listar";
import Editar from "./editar";
import { Container } from "@mui/material";
import Footerr from "./footer";
import Inicio from "./inicio";

const Mainpage = () => {
  return (
    <div>
      <BrowserRouter>
        <Mymenu />
        <Container>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="cadastrar" element={<Cadastrar />}></Route>
            <Route path="listar" element={<Listar />}></Route>
            <Route path="editar" element={<Editar />}></Route>
          </Routes>
        </Container>
        <Footerr></Footerr>
      </BrowserRouter>
    </div>
  );
};

export default Mainpage;
