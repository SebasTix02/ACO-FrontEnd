import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import TablaVerPedidos from '../../common/table/tablaVerPedidos';
import { useState, useEffect } from 'react';
import ModalIngresarPedido from '../../common/modal/modal_ingresar_pedido';
import { Modal } from 'antd';
import { listarPedidos } from '../../providers/options/pedidos';

export const VerPedidos = () => {
  const [modalIngVisible, setModalIngVisible] = useState(false);
  const [mostrarModalEliminar, setmostrarModalEliminar] = useState(false);
  const [pedidos, setPedidos] = useState<any[]>([]);
  
  const manejarOkEliminar = () => {
    Modal.success({
      title: 'Pedido eliminado',
      content: 'El pedido ha sido eliminado correctamente',
    });
    setmostrarModalEliminar(false);
  };

  useEffect(() => {
    const fetchPedidos = async () => {
      const response = await listarPedidos();
      if (response.exito) {
        setPedidos(response.pedidos);
      } else {
        // Manejar error, por ejemplo con un mensaje
        console.error(response.error);
      }
    };
    fetchPedidos();
  }, []);

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Ver Pedidos</h1>
      </div>
      <TablaVerPedidos
        data={pedidos}
        onAdd={() => setModalIngVisible(true)}
        onDelete={() => setmostrarModalEliminar(true)}
        onEdit={(record) => console.log('Editar nuevo pedido', record)}
        searchFields={['numero_pedido', 'nombre_cliente', 'estado']}
      />
      <ModalIngresarPedido
        esVisible={modalIngVisible}
        enCerrar={() => setModalIngVisible(false)}
      />
      <Modal
        title="Confirmar Eliminación del pedido"
        open={mostrarModalEliminar}
        onOk={manejarOkEliminar}
        onCancel={() => setmostrarModalEliminar(false)}
        okText="Confirmar"
        cancelText="Cancelar"
      >
        <p>¿Desea eliminar este pedido definitivamente?</p>
      </Modal>
    </Layout>
  );
};
