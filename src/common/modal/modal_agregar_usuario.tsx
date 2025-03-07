import React from 'react';
import { Modal, Form, Input, Select, message } from 'antd';
import { Usuario } from '../../interfaces/interfaces';
import { crearUsuario } from '../../providers/options/usuarios';

interface ModalAgregarUsuarioProps {
  visible: boolean;
  onClose: () => void;
  onSave: (usuario: Usuario) => void;
}

const ModalAgregarUsuario: React.FC<ModalAgregarUsuarioProps> = ({ visible, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = async () => {
    try {
      // Validar y obtener los valores del formulario
      const valores = await form.validateFields();
      // Llamar al servicio para crear el usuario
      const respuesta = await crearUsuario(valores);
      if (respuesta.exito) {
        onSave(respuesta.usuario); // Se asume que el backend devuelve el usuario creado
        message.success('Usuario creado correctamente');
        form.resetFields();
      } else {
        message.error(respuesta.error || 'Error al crear el usuario');
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <Modal
      title="Nuevo Usuario"
      open={visible}
      onOk={handleSave}
      onCancel={onClose}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="usuario"
          label="Nombre de usuario"
          rules={[{ required: true, message: 'Por favor ingrese el nombre de usuario' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="clave"
          label="Contraseña"
          rules={[{ required: true, message: 'Por favor ingrese la contraseña' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="apellido"
          label="Apellido"
          rules={[{ required: true, message: 'Por favor ingrese el apellido' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="privilegios"
          label="Privilegios"
          rules={[{ required: true, message: 'Por favor seleccione los privilegios' }]}
        >
          <Select
            options={[
              { value: 'admin', label: 'Administrador' },
              { value: 'usuario', label: 'Usuario estándar' },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAgregarUsuario;
