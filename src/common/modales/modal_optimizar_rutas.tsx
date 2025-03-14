import { Modal } from 'antd';

const ModalRutas = ({ visible, actionType, onConfirm, onCancel }: {
    visible: boolean;
    actionType: 'CANCELADA' | 'COMPLETADA';
    onConfirm: () => void;
    onCancel: () => void;
}) => {
    const actionText = actionType === 'CANCELADA' ? 'cancelar' : 'completar';
    const actionTitle = actionType === 'CANCELADA' ? 'Cancelar Ruta' : 'Completar Ruta';

    return (
        <Modal
            title={`Confirmar ${actionTitle}`}
            visible={visible}
            onOk={onConfirm}
            onCancel={onCancel}
            okText={`Confirmar ${actionText}`}
            cancelText="Cancelar"
        >
            <p>
                ¿Está seguro que desea {actionText} esta ruta? 
                {actionType === 'COMPLETADA' && ` Se marcarán los pedidos relacionados a la ruta como completados.`}
            </p>
        </Modal>
    );
};

export default ModalRutas;