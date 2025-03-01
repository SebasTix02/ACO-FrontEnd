import React, { useState } from 'react';
import { Row, Button, Space, Modal, Form, Input, Select, Spin, notification } from 'antd';
import Layout from "../../components/layout";
const { Option } = Select;

const Prediccion: React.FC = () => {
    
    return (
        <>
            <Layout>
                <div style={{ padding: '20px' }}>
                    <h1 style={{ marginBottom: '20px' }}>Predicción - BI</h1>
                    <Row gutter={[16, 16]} justify={"center"}>
                        
                    </Row>
                </div>
            </Layout>
           
        </>
    );
};

export default Prediccion;
