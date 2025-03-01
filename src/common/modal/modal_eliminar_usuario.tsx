// ModalEliminarUsuario.tsx
import React from 'react';
import { Modal, Typography } from 'antd';
import { Usuario } from '../../interfaces/interfaces';

interface ModalEliminarUsuarioProps {
    visible: boolean;
    onClose: () => void;
    usuario: Usuario;
    onConfirm: () => void;
}

const ModalEliminarUsuario: React.FC<ModalEliminarUsuarioProps> = ({ visible, onClose, usuario, onConfirm }) => {
    return (
        <Modal
            title="Confirmar Eliminación"
            open={visible}
            onOk={onConfirm}
            onCancel={onClose}
            okText="Eliminar"
            okButtonProps={{ danger: true }}
        >
            <Typography.Text>
                ¿Estás seguro de eliminar al usuario {usuario.nombre} ({usuario.usuario})?
            </Typography.Text>
        </Modal>
    );
};

export default ModalEliminarUsuario;