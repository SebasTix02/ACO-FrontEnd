import { Popover, Button } from 'antd';
import React, { useState } from 'react';
import AvatarActual from '../avatarActual';
import { useGetIdentity, useLogout } from '@refinedev/core'; // Añadir useLogout
import { Text } from '../text';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../providers/options/login';

const UsuarioActual = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { data: user } = useGetIdentity<{ name: string }>(); 

    const handleLogout = async () => {
        setIsOpen(false);
        
        try {
            await logoutUser(); // Usar función de logout
            // Redirigir y forzar recarga para limpiar estado
            navigate('/login');
            window.location.reload();
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const content = (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            <Text strong style={{ padding: "12px 20px" }}>
                {user?.name || 'Usuario'} {/* Mostrar nombre real del usuario */}
            </Text>
            <div style={{
                borderTop: '1px solid #d9d9d9',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
            }}>
                <Button
                    style={{ textAlign: "left" }}
                    icon={<LogoutOutlined />}
                    type='text'
                    block
                    onClick={handleLogout} // Usar el nuevo handler
                >
                    Salir
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <Popover
                placement='bottomRight'
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
                content={content}
            >
                <AvatarActual
                    name={user?.name || 'Usuario'} 
                    src={"src/images/user.png"}
                    size="default"
                    style={{ cursor: 'pointer' }}
                />
            </Popover>
        </>
    );
}

export default UsuarioActual;