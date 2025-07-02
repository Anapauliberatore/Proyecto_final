import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TABLACONSTRUCCIONES, HOME, DESARROLLOSPAGE, INVERSORESPAGE,  TABLACLIENTE, LOGIN, AGREGARCLIENTEPAGE, EDITARCLIENTEPAGE, NOSOTROSPAGE, AGREGARCONSTRUCCIONPAGE, EDITARCONSTRUCCIONPAGE, VERCONSTRUCCIONPAGE, VERCLIENTEPAGE } from "./Routers/router";

import EditarclientePage from "./Pages/EditarclientePage";
import NosotrosPage from "./Pages/NosotrosPage";
import EditarconstruccionPage from "./Pages/EditarconstruccionPage";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import AgregarclientePage from "./Pages/AgregarclientePage";
import AgregarconstruccionPage from "./Pages/AgregarconstruccionPage";
import VerconstruccionPage from "./Pages/VerconstruccionPage";
import VerclientePage from "./Pages/VerclientePage";
import TablaCliente from "./Pages/TablaCliente";

import DesarrollosPage from "./Pages/DesarrollosPage";
import InversoresPage from "./Pages/InversoresPage";
import TablaConstruccion from "./Pages/TablaConstruccion";

import Header from "./Components/Header";
import { LoginPermisoProvider } from "./Components/LoginPermisoContext";

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = [LOGIN];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path={TABLACLIENTE} element={<TablaCliente />} />
       
        <Route path={TABLACONSTRUCCIONES} element={<TablaConstruccion />} />
        <Route path={DESARROLLOSPAGE} element={<DesarrollosPage />} />

       
        <Route path={INVERSORESPAGE} element={<InversoresPage />} />
        <Route path={AGREGARCLIENTEPAGE} element={<AgregarclientePage />} />
        <Route path={AGREGARCONSTRUCCIONPAGE} element={<AgregarconstruccionPage />} />

        <Route path={NOSOTROSPAGE} element={<NosotrosPage />} />
        <Route path={EDITARCONSTRUCCIONPAGE} element={<EditarconstruccionPage />} />
        <Route path={VERCONSTRUCCIONPAGE} element={<VerconstruccionPage />} />
        <Route path={VERCLIENTEPAGE} element={<VerclientePage />} />
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={EDITARCLIENTEPAGE} element={<EditarclientePage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LoginPermisoProvider>
        <AppContent />
      </LoginPermisoProvider>
    </BrowserRouter>
  );
}
