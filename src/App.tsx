import { GitHubBanner, Refine, Authenticated } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { dataProvider, authProvider } from "./providers";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Login, Register, Home, ListaUsuarios, Inventario } from "./pages";
import Layout from "./components/layout";
import { resources } from "./config/resources";
import { Pedidos } from "./pages/pedidos/pedidos";
import Rutas from "./pages/rutas/rutas";
import { VerPedidos } from "./pages/verPedidos/verPedidos";
import Prediccion from "./pages/reportes/reportes";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <AuthProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
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
                  {/* Rutas públicas */}
                  <Route
                    element={
                      <Authenticated
                        key="public-routes"
                        fallback={<Outlet />}
                        redirectOnFail="/"
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrarse" element={<Register />} />
                  </Route>

                  {/* Rutas protegidas */}
                  <Route
                    element={
                      <Authenticated
                        key="protected-routes"
                        fallback={
                          <Navigate
                            to="/login"
                            replace
                          />
                        }
                      >
                          <Outlet />
                      </Authenticated>
                    }
                  >
                    <Route index element={<Home />} />
                    <Route path="/usuarios" element={<ListaUsuarios />} />
                    <Route path="/inventario" element={<Inventario />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="/rutas" element={<Rutas />} />
                    <Route path="/verPedidos" element={<VerPedidos />} />
                    <Route path="/prediccion" element={<Prediccion />} />
                  </Route>

                  {/* Redirección raíz */}
                  <Route
                    index
                    element={<Navigate to="/inventario" replace />}
                  />
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </AntdApp>
        </AuthProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;