import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Space, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Usuario } from '../../interfaces/interfaces';
import ModalEditarUsuario from '../modales/modal_editar_usuario';
import ModalEliminarUsuario from '../modales/modal_eliminar_usuario';
import ModalAgregarUsuario from '../modales/modal_agregar_usuario';
import "./tablaVerPedidos.css";

const TablaUsuarios: React.FC<{
    data: Usuario[];
    onAdd: (usuario: Usuario) => void;
    onDelete: (id: string) => void;
    onEdit: (usuario: Usuario) => void;
    searchFields?: string[];
}> = ({ data, onAdd, onDelete, onEdit, searchFields = ['usuario', 'nombre', 'apellido'] }) => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null);
    const [textoBusqueda, setTextoBusqueda] = useState('');
    const [tipoFiltro, setTipoFiltro] = useState<string>(searchFields[0]);
    const [datosFiltrados, setDatosFiltrados] = useState<Usuario[]>(data);
    const [modalVisible, setModalVisible] = useState<'add' | 'edit' | 'delete' | null>(null);

    // Actualizar datos filtrados cuando cambien los datos
    useEffect(() => {
        setDatosFiltrados(data);
    }, [data]);

    const handleSearch = (valor: string) => {
        setTextoBusqueda(valor);
        if (!valor) {
            setDatosFiltrados(data);
            return;
        }
        const filtrados = data.filter(usuario => {
            const valorCampo = (usuario as any)[tipoFiltro]?.toString().toLowerCase();
            return valorCampo?.includes(valor.toLowerCase());
        });
        setDatosFiltrados(filtrados);
    };

    const columnasUsuario = [
        {
            title: 'Usuario',
            dataIndex: 'usuario',
            key: 'usuario',
            sorter: (a: Usuario, b: Usuario) => a.usuario.localeCompare(b.usuario),
        },
        {
            title: 'Nombre Completo',
            key: 'nombre',
            render: (_: any, registro: Usuario) => (
                <span>{registro.nombre} {registro.apellido}</span>
            ),
        },
        {
            title: 'Privilegios',
            dataIndex: 'privilegios',
            key: 'privilegios',
            render: (texto: string) => (
                <Tag color={texto === 'admin' ? 'gold' : 'geekblue'}>
                    {texto.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'Acciones',
            key: 'acciones',
            render: (_: any, registro: Usuario) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setUsuarioSeleccionado(registro);
                            setModalVisible('edit');
                        }}
                    />
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            setUsuarioSeleccionado(registro);
                            setModalVisible('delete');
                        }}
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className="table-container">
            <div className="search-bar-container">
                <div className="search-bar">
                    <Select
                        defaultValue={searchFields[0]}
                        onChange={valor => setTipoFiltro(valor)}
                        className="search-select"
                    >
                        {searchFields.map(campo => (
                            <Select.Option key={campo} value={campo}>
                                {campo.replace(/([A-Z])/g, ' $1').trim()}
                            </Select.Option>
                        ))}
                    </Select>

                    <Input.Search
                        placeholder={`Buscar por ${tipoFiltro}...`}
                        allowClear
                        onSearch={handleSearch}
                        onChange={e => handleSearch(e.target.value)}
                        className="search-input"
                    />

                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setModalVisible('add')}
                        className="add-button"
                    >
                        Nuevo Usuario
                    </Button>
                </div>
            </div>

            <div className="table-scroll">
                <Table
                    columns={columnasUsuario}
                    dataSource={datosFiltrados}
                    rowKey={(registro: Usuario) => registro.id.toString()}
                    bordered
                    scroll={{ x: 'max-content' }}
                />
            </div>

            {/* Modales */}
            <ModalAgregarUsuario
                visible={modalVisible === 'add'}
                onClose={() => setModalVisible(null)}
                onSave={(nuevoUsuario) => {
                    onAdd(nuevoUsuario);
                    setModalVisible(null);
                }}
            />

            {usuarioSeleccionado && (
                <>
                    <ModalEditarUsuario
                        visible={modalVisible === 'edit'}
                        onClose={() => setModalVisible(null)}
                        usuario={usuarioSeleccionado}
                        onSave={(usuarioActualizado) => {
                            onEdit(usuarioActualizado);
                            setModalVisible(null);
                        }}
                    />

                    <ModalEliminarUsuario
                        visible={modalVisible === 'delete'}
                        onClose={() => setModalVisible(null)}
                        usuario={usuarioSeleccionado}
                        onConfirm={() => {
                            onDelete(usuarioSeleccionado.id.toString());
                            setModalVisible(null);
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default TablaUsuarios;
