import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button, Space, Row, notification, message } from 'antd';
import TablaUsuarios from '../../common/table/tablaUsuarios';
import { Usuario } from '../../interfaces/interfaces';

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: '1',
      usuario: 'admin',
      clave: 'admin123',
      nombre: 'Juan',
      apellido: 'Pérez',
      privilegios: 'admin'
    },
    {
      id: '2',
      usuario: 'ventas1',
      clave: 'ventas123',
      nombre: 'María',
      apellido: 'Gómez',
      privilegios: 'basico'
    }
  ]);

  const handleAddUsuario = (nuevoUsuario: Usuario) => {
    setUsuarios(prev => [...prev, nuevoUsuario]);
    message.success('Usuario agregado correctamente');
  };

  const handleEditUsuario = (usuarioActualizado: Usuario) => {
    setUsuarios(prev =>
      prev.map(u => u.id === usuarioActualizado.id ? usuarioActualizado : u)
    );
    message.success('Usuario actualizado correctamente');
  };

  const handleDeleteUsuario = (id: string) => {
    setUsuarios(prev => prev.filter(u => u.id !== id));
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