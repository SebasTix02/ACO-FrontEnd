import { Row, Button, Space } from "antd";
import Layout from "../../components/layout";
import { useState,  } from "react";
import {  FileAddOutlined, CarOutlined, OrderedListOutlined} from '@ant-design/icons';
import "../options.css"
import { useNavigate } from "react-router-dom";
import OrderEntryModal from "../../common/modal/modal_ingresar_pedido";
import "../../common/modal/map.css";

export const Pedidos = () => {
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <h1 style={{ marginBottom: '20px' }}>Pedidos</h1>
                <Row gutter={[16, 16]} justify={"center"}>
                    <Space>
                        <div className="listI">
                            <Button type="primary" icon={ <FileAddOutlined />} 
                                className="custom-buttonI" onClick={() => setIsModalVisible(true)}>
                                Ingresar Pedido
                            </Button>
                            <OrderEntryModal
                                isVisible={isModalVisible}
                                onClose={() => setIsModalVisible(false)}
                            />
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
