import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button, Space, Row, notification } from 'antd';

export const ListaUsuarios = () => {
  
  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Lista de Usuarios</h1>
        <Row gutter={[16, 16]}>
        </Row>
      </div>
    </Layout>
  );
};