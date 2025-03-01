import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {authProvider, dataProvider,
  liveProvider,
} from "./providers";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {Login, Register, Home, ListaUsuarios, Inventario} from "./pages"
import Layout from "./components/layout";
import { resources } from "./config/resources";
import { Pedidos } from "./pages/pedidos/pedidos";
import Rutas from "./pages/rutas/rutas";
import { VerPedidos } from "./pages/verPedidos/verPedidos";
import Prediccion from "./pages/reportes/reportes";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "XQGdjt-bgi5r1-sSYWgr",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/registrarse" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/" element={<Home />} />
                  <Route path="/usuarios" element={<ListaUsuarios />} />
                  <Route path="/inventario" element={<Inventario />} />
                  <Route path="/pedidos" element={<Pedidos />} />
                  <Route path="/rutas" element={<Rutas />} />
                  <Route path="/verPedidos" element={<VerPedidos/>} />
                  <Route path="/prediccion" element={<Prediccion />} />
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </AntdApp>
        </>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
