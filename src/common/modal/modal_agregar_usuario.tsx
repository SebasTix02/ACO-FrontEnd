// ModalAgregarUsuario.tsx
import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { Usuario } from '../../interfaces/interfaces';

interface ModalAgregarUsuarioProps {
    visible: boolean;
    onClose: () => void;
    onSave: (usuario: Usuario) => void;
}

const ModalAgregarUsuario: React.FC<ModalAgregarUsuarioProps> = ({ visible, onClose, onSave }) => {
    const [form] = Form.useForm();

    const handleSave = () => {
        form.validateFields()
            .then(values => {
                onSave({
                    ...values,
                    id: crypto.randomUUID()
                });
                form.resetFields();
            });
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

export default ModalAgregarUsuario;