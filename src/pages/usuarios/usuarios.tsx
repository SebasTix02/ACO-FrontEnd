import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button, Space, Row, notification, message } from 'antd';
import TablaUsuarios from '../../common/table/tablaUsuarios';
import { Usuario } from '../../interfaces/interfaces';
import { listarUsuarios } from '../../providers/options/usuarios';

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Cargar usuarios desde el backend al montar el componente
  useEffect(() => {
    const cargarUsuarios = async () => {
      const resultado = await listarUsuarios();
      if (resultado.exito) {
        setUsuarios(resultado.usuarios);
      } else {
        notification.error({
          message: 'Error al cargar usuarios',
          description: resultado.error,
        });
      }
    };

    cargarUsuarios();
  }, []);

  const handleAddUsuario = (nuevoUsuario: Usuario) => {
    setUsuarios((prev) => [...prev, nuevoUsuario]);
    message.success('Usuario agregado correctamente');
  };

  const handleEditUsuario = (usuarioActualizado: Usuario) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === usuarioActualizado.id ? usuarioActualizado : u))
    );
    message.success('Usuario actualizado correctamente');
  };

  const handleDeleteUsuario = (id: string) => {
    setUsuarios(prev => prev.filter(u => u.id.toString() !== id));
    message.success('Usuario eliminado correctamente');
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Lista de Usuarios</h1>
        <TablaUsuarios
          data={usuarios}
          onAdd={handleAddUsuario}
          onEdit={handleEditUsuario}
          onDelete={handleDeleteUsuario}
          searchFields={['usuario', 'nombre', 'apellido']}
        />
      </div>
    </Layout>
  );
};
