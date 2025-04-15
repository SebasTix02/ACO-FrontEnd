import { Modal, Select, Button } from 'antd';
import { useState } from 'react';
import { ModalInicioRutaProps } from '../../interfaces/interfaces';

const ubicacionesInicio = [
  {
    nombre: 'Ambato',
    coordenadas: [-78.61234903335573, -1.2830400896671588]
  },
  {
    nombre: 'Cevallos', 
    coordenadas: [-78.633441, -1.360463]
  }
];

export const ModalInicioRuta = ({ visible, onCancel, onConfirm }: ModalInicioRutaProps) => {
  const [selectedUbicacion, setSelectedUbicacion] = useState(null);

  return (
    <Modal
      title="Seleccionar punto de inicio"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button
          key="confirm"
          type="primary"
          disabled={!selectedUbicacion}
          onClick={() => onConfirm(selectedUbicacion)}
        >
          Confirmar
        </Button>,
      ]}
    >
      <Select
        placeholder="Seleccione ubicación inicial"
        style={{ width: '100%' }}
        onChange={value => setSelectedUbicacion(JSON.parse(value))}
        options={ubicacionesInicio.map(ubicacion => ({
          value: JSON.stringify(ubicacion.coordenadas),
          label: ubicacion.nombre,
        }))}
      />
    </Modal>
  );
};