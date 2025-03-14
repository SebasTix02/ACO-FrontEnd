import { Row, Button, Space } from "antd";
import Layout from "../../components/layout";
import { useState,  } from "react";
import {  FileAddOutlined, CarOutlined, OrderedListOutlined} from '@ant-design/icons';
import "../options.css"
import { useNavigate } from "react-router-dom";
import ModalIngresarPedido from "../../common/modales/modal_ingresar_pedido";

export const Pedidos = () => {
    const navigate = useNavigate()
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <h1 style={{ marginBottom: '20px' }}>Pedidos</h1>
                <Row gutter={[16, 16]} justify={"center"}>
                    <Space>
                        <div className="listI">
                            <Button type="primary" icon={ <FileAddOutlined />} 
                                className="custom-buttonI" onClick={() => setModalVisible(true)}>
                                Ingresar Pedido
                            </Button>
                            <ModalIngresarPedido
                                esVisible={modalVisible}
                                enCerrar={() => setModalVisible(false)}
                            />
                            <Button type="primary" icon={ <CarOutlined />} 
                                className="custom-buttonI" onClick={() => navigate("/rutas")}>
                                Rutas
                            </Button>
                            <Button type="primary" icon={ <OrderedListOutlined />} 
                                className="custom-buttonI" onClick={() => navigate("/verPedidos")}>
                                Ver Pedidos
                            </Button>
                        </div>
                    </Space>
                </Row>
            </div>
        </Layout>
    );
}
