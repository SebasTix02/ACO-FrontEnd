import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { checkSession, loginUser } from '../../providers/options/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

export const Login = () => {
  const usuarioRef = useRef<HTMLInputElement>(null);
  const claveRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Verificar sesión al cargar el componente
  useEffect(() => {
    const checkExistingSession = async () => {
      const result = await checkSession();
      if (result.success) {
        navigate('/');
      }
    };
    checkExistingSession();
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario = usuarioRef.current?.value;
    const clave = claveRef.current?.value;

    if (!usuario || !clave) {
      toast.error('Por favor complete todos los campos');
      return;
    }
    const result = await loginUser({ usuario, clave });
    console.log(result.success);
    if (result.success == false) {
      toast.error('Error en las credenciales');
    } else {
      const sessionCheck = await checkSession();
      if (sessionCheck.success || result.success) {
        navigate('/');
      }
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