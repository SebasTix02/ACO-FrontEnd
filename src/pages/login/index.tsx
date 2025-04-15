import React, { useRef, useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../providers/options/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
  const usuarioRef = useRef<HTMLInputElement>(null);
  const claveRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { loading, user, refreshUser } = useAuth();
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      if (user.privilegios === "basico") {
        navigate('/pedidos', { replace: true });
      } else {
        navigate('/inventario', { replace: true });
      }
    }
  }, [user, loading, navigate]);

  if (loading || localLoading) {
    return (
      <div className="login-container">
        <Spin size="large" tip="Verificando sesión..." />
      </div>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario = usuarioRef.current?.value;
    const clave = claveRef.current?.value;
  
    if (!usuario || !clave) {
      toast.error('Por favor complete todos los campos');
      return;
    }
    setLocalLoading(true);
    const result = await loginUser({ usuario, clave });
    if (!result.success) {
      setLocalLoading(false);
      toast.error('Error en las credenciales');
    } else {
      await refreshUser(true); // Forzar verificación aunque sessionInvalid sea true
      setLocalLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Ingreso</h2>
        <h3 className="login-description">Ingrese su usuario y clave para acceder</h3>
        <form onSubmit={handleSubmit}>
          <div className="login-form-item">
            <label style={{ color: 'white' }} htmlFor="text">Ingresa tu usuario</label>
            <input id="text" type="text" placeholder="Usuario" ref={usuarioRef} className="login-input" />
          </div>

          <div className="login-form-item">
            <label style={{ color: 'white' }} htmlFor="password">Ingresa tu clave</label>
            <input id="password" type="password" placeholder="Contraseña" ref={claveRef} className="login-input" />
          </div>

          <Button type="primary" htmlType="submit" className="login-button">
            Ingresar
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};