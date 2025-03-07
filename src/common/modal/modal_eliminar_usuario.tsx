import React from 'react';
import { Modal, Typography, message } from 'antd';
import { Usuario } from '../../interfaces/interfaces';
import { eliminarUsuario } from '../../providers/options/usuarios';

interface ModalEliminarUsuarioProps {
  visible: boolean;
  onClose: () => void;
  usuario: Usuario;
  onConfirm: (id: string) => void;
}

const ModalEliminarUsuario: React.FC<ModalEliminarUsuarioProps> = ({
  visible,
  onClose,
  usuario,
  onConfirm,
}) => {
  const handleConfirm = async () => {
    try {
      const respuesta = await eliminarUsuario(usuario.id.toString());
      if (respuesta.exito) {
        message.success('Usuario eliminado correctamente');
        onConfirm(usuario.id.toString());
        onClose();
      } else {
        message.error(respuesta.error || 'Error al eliminar el usuario');
      }
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      message.error('Error al eliminar el usuario');
    }
  };

  return (
    <Modal
      title="Confirmar Eliminación"
      open={visible}
      onOk={handleConfirm}
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
