import { Row, Button, Space } from "antd";
import Layout from "../../components/layout";
import { useState,  } from "react";
import {  FileAddOutlined, CarOutlined, OrderedListOutlined} from '@ant-design/icons';
import "../options.css"
import { useNavigate } from "react-router-dom";

export const Pedidos = () => {
    const navigate = useNavigate()
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState<any>(null);

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <h1 style={{ marginBottom: '20px' }}>Menú de Pedidos</h1>
                <Row gutter={[16, 16]} justify={"center"}>
                    <Space>
                        <div className="listI">
                            <Button type="primary" icon={ <FileAddOutlined />} 
                                className="custom-buttonI" onClick={() => navigate("/categorias")}>
                                Ingresar Pedido
                            </Button>
                            <Button type="primary" icon={ <CarOutlined />} 
                                className="custom-buttonI" onClick={() => navigate("/bloques")}>
                                Rutas
                            </Button>
                            <Button type="primary" icon={ <OrderedListOutlined />} 
                                className="custom-buttonI" onClick={() => navigate("/ubicaciones")}>
                                Ver Pedidos
                            </Button>
                        </div>
                    </Space>
                </Row>
            </div>
        </Layout>
    );
}
