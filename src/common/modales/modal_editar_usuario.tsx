import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, message } from 'antd';
import { ModalEditarUsuarioProps } from '../../interfaces/interfaces';
import { actualizarUsuario } from '../../providers/options/usuarios';


const ModalEditarUsuario: React.FC<ModalEditarUsuarioProps> = ({
  visible,
  onClose,
  usuario,
  onSave,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    // Prellenar los campos excepto la contraseña
    form.setFieldsValue({ ...usuario, clave: '' });
  }, [usuario, form]);

  const handleSave = async () => {
    try {
      // Validar y obtener los valores del formulario
      const valores = await form.validateFields();
      // Si la contraseña está vacía, no se envía para no actualizarla
      if (!valores.clave) {
        delete valores.clave;
      }
      // Llamar al servicio para actualizar el usuario
      const respuesta = await actualizarUsuario(usuario.id.toString(), valores);
      if (respuesta.exito) {
        message.success('Usuario actualizado correctamente');
        onSave(respuesta.usuario);
        form.resetFields();
      } else {
        message.error(respuesta.error || 'Error al actualizar el usuario');
      }
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      message.error('Error al actualizar el usuario');
    }
  };

  return (
    <Modal
      title={`Editar Usuario: ${usuario.usuario}`}
      open={visible}
      onOk={handleSave}
      onCancel={onClose}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="usuario"
          label="Nombre de usuario"
          rules={[{ required: true, message: 'Ingrese el nombre de usuario' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="clave"
          label="Contraseña"
        >
          <Input.Password placeholder="Dejar en blanco para mantener la contraseña actual" />
        </Form.Item>

        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true, message: 'Ingrese el nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="apellido"
          label="Apellido"
          rules={[{ required: true, message: 'Ingrese el apellido' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="privilegios"
          label="Privilegios"
          rules={[{ required: true, message: 'Seleccione los privilegios' }]}
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

export default ModalEditarUsuario;
