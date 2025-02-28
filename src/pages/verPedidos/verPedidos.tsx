import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import TablaVerPedidos from '../../common/table/tablaVerPedidos';
import { datosEstPedidos } from '../../constants';
import { useState } from 'react';
import ModalIngresarPedido from '../../common/modal/modal_ingresar_pedido';
import { Modal } from 'antd';


export const VerPedidos = () => {

  const [modalIngVisible, setModalIngVisible] = useState(false);
  const [mostrarModalEliminar, setmostrarModalEliminar] = useState(false);
  const manejarOkEliminar = () => {
    Modal.success({
      title: 'Pedido eliminado',
      content: 'El pedido ha sido eliminado correctamente',
    });
    setmostrarModalEliminar(false);
  };
  return (

    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Ver Pedidos</h1>
      </div>
      <TablaVerPedidos
        data={datosEstPedidos}
        onAdd={() => setModalIngVisible(true)}
        onDelete={() => setmostrarModalEliminar(true)}
        onEdit={() => console.log('Editar nuevo pedido')}
        searchFields={['numeroPedido', 'cliente']}
      />
      <ModalIngresarPedido
        esVisible={modalIngVisible}
        enCerrar={() => setModalIngVisible(false)}
      />
      <Modal
        title="Confirmar Eliminacion del pedido"
        open={mostrarModalEliminar}
        onOk={manejarOkEliminar}
        onCancel={() => setmostrarModalEliminar(false)}
        okText="Confirmar"
        cancelText="Cancelar"
      >
        <p>¿Desea Eliminar este pedido definitivamente?</p>
      </Modal>
    </Layout>
  );
};