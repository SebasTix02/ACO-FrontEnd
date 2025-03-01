import React, { useState } from 'react';
import { Table, Tag, Button, Space, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Usuario } from '../../interfaces/interfaces';
import ModalEditarUsuario from '../modal/modal_editar_usuario';
import ModalEliminarUsuario from '../modal/modal_eliminar_usuario';
import ModalAgregarUsuario from '../modal/modal_agregar_usuario';
import "./tablaVerPedidos.css";

const TablaUsuarios: React.FC<{
    data: Usuario[];
    onAdd: (usuario: Usuario) => void;
    onDelete: (id: string) => void;
    onEdit: (usuario: Usuario) => void;
    searchFields?: string[];
}> = ({ data, onAdd, onDelete, onEdit, searchFields = ['usuario', 'nombre'] }) => {
    const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);
    const [searchText, setSearchText] = useState('');
    const [filterType, setFilterType] = useState<string>(searchFields[0]);
    const [filteredData, setFilteredData] = useState<Usuario[]>(data);
    const [modalVisible, setModalVisible] = useState<'add' | 'edit' | 'delete' | null>(null);

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
            render: (_: any, record: Usuario) => (
                <span>{record.nombre} {record.apellido}</span>
            ),
        },
        {
            title: 'Privilegios',
            dataIndex: 'privilegios',
            key: 'privilegios',
            render: (text: string) => (
                <Tag color={text === 'admin' ? 'gold' : 'geekblue'}>{text.toUpperCase()}</Tag>
            ),
        },
        {
            title: 'Acciones',
            key: 'actions',
            render: (_: any, record: Usuario) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setSelectedUsuario(record);
                            setModalVisible('edit');
                        }}
                    />
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            setSelectedUsuario(record);
                            setModalVisible('delete');
                        }}
                    />
                </Space>
            ),
        },
    ];

    const handleSearch = (value: string) => {
        setSearchText(value);
        const filtered = data.filter(usuario => {
            const fieldValue = (usuario as any)[filterType]?.toString().toLowerCase();
            return fieldValue?.includes(value.toLowerCase());
        });
        setFilteredData(filtered);
    };

    return (
        <div className="table-container">
            <div className="search-bar-container">
                <div className="search-bar">
                    <Select
                        defaultValue={searchFields[0]}
                        onChange={value => setFilterType(value)}
                        className="search-select"
                    >
                        {searchFields.map(field => (
                            <Select.Option key={field} value={field}>
                                {field.replace(/([A-Z])/g, ' $1').trim()}
                            </Select.Option>
                        ))}
                    </Select>

                    <Input.Search
                        placeholder={`Buscar por ${filterType}...`}
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
                    dataSource={filteredData}
                    rowKey="id"
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

            {selectedUsuario && (
                <>
                    <ModalEditarUsuario
                        visible={modalVisible === 'edit'}
                        onClose={() => setModalVisible(null)}
                        usuario={selectedUsuario}
                        onSave={(usuarioActualizado) => {
                            onEdit(usuarioActualizado);
                            setModalVisible(null);
                        }}
                    />

                    <ModalEliminarUsuario
                        visible={modalVisible === 'delete'}
                        onClose={() => setModalVisible(null)}
                        usuario={selectedUsuario}
                        onConfirm={() => {
                            onDelete(selectedUsuario.id);
                            setModalVisible(null);
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default TablaUsuarios;