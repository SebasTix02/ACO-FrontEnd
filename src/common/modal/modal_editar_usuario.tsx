import React, { useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { Usuario } from '../../interfaces/interfaces';

interface ModalEditarUsuarioProps {
    visible: boolean;
    onClose: () => void;
    usuario: Usuario;
    onSave: (usuario: Usuario) => void;
}

const ModalEditarUsuario: React.FC<ModalEditarUsuarioProps> = ({ visible, onClose, usuario, onSave }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(usuario);
    }, [usuario]);

    const handleSave = () => {
        form.validateFields()
            .then(values => {
                onSave({ ...usuario, ...values });
                form.resetFields();
            });
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
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="clave"
                    label="Contraseña"
                    rules={[{ required: true }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="nombre"
                    label="Nombre"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="apellido"
                    label="Apellido"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="privilegios"
                    label="Privilegios"
                    rules={[{ required: true }]}
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