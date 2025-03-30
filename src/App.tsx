import { GitHubBanner, Refine, Authenticated } from "@refinedev/core";
import React, { lazy, Suspense } from 'react';
import { DevtoolsProvider } from "@refinedev/devtools";
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
import { resources } from "./config/resources";
import Layout from "./components/layout";
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
          <ProtectedApp />
        </AuthProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

const ProtectedApp = () => {
  const { user, loading, refreshUser } = useAuth();

  // Mostrar un mensaje de carga mientras se verifica el usuario
  if (loading) return <div>Cargando...</div>;

  // Filtrar recursos según privilegios
  const filteredResources =
    user?.privilegios === "basico"
      ? resources.filter((resource) => resource.name === "pedidos")
      : resources;
  
  // Determinar si el usuario es básico
  const isBasicUser = user?.privilegios === "basico";
  return (
    <AntdApp>
      <DevtoolsProvider>
        <Refine
          dataProvider={dataProvider}
          notificationProvider={useNotificationProvider}
          routerProvider={routerBindings}
          authProvider={{
            ...authProvider,
            check: async () => {
              if (user) {
                return { authenticated: true };
              }
              await refreshUser();
              return user ? { authenticated: true } : { authenticated: false };
            },
          }}
          
          resources={filteredResources}
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
                  v3LegacyAuthProviderCompatible={true}
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
                  fallback={<Navigate to="/login" replace />}
                  v3LegacyAuthProviderCompatible={true}
                >
                  <Outlet />
                </Authenticated>
              }
            >
              {/* Rutas disponibles solo para usuarios NO básicos */}
              {!isBasicUser && (
                <>
                  <Route index element={<Home />} />
                  <Route path="/usuarios" element={<ListaUsuarios />} />
                  <Route path="/inventario" element={<Inventario />} />
                  <Route path="/rutas" element={<Rutas />} />
                  <Route path="/verPedidos" element={<VerPedidos />} />
                  <Route path="/prediccion" element={<Prediccion />} />
                </>
              )}

              {/* Ruta de pedidos disponible para todos */}
              <Route path="/pedidos" element={<Pedidos />} />

              {/* Redirección por defecto según privilegios */}
              <Route
                index
                element={
                  <Navigate to={isBasicUser ? "/pedidos" : "/inventario"} replace />
                }
              />

              {/* Redirigir cualquier ruta no permitida para usuarios básicos */}
              {isBasicUser && (
                <Route path="*" element={<Navigate to="/pedidos" replace />} />
              )}
            </Route>
          </Routes>

          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </DevtoolsProvider>
    </AntdApp>
  );
};

export default App;
