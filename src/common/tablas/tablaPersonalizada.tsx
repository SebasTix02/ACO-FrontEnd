import React, { useState } from 'react';
import { Table, Button, Input, Select, Tag } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import './tablaPerzonalizada.css';
import { FiltroTabla, PropsTablaPerzonalizada } from '../../interfaces/interfaces';

const { Option } = Select;

const TablaPersonalizada = <T extends object>({ dataSource, 
    columns, 
    rowKey, 
    handleAdd, 
    searchFields 
  }: PropsTablaPerzonalizada<T>) => {
    const [filters, setFilters] = useState<FiltroTabla[]>([]);
    const [currentFilter, setCurrentFilter] = useState<FiltroTabla>({ columna: '', valor: '' });
  
    const handleSearch = () => {
      return dataSource.filter((item: any) =>
        filters.every((filter) => {
          const itemValue = item[filter.columna];
          const filterValue = filter.valor.toLowerCase();
  
          if (typeof itemValue === 'number') {
            return itemValue === Number(filterValue);
          }
          return String(itemValue).toLowerCase().includes(filterValue);
        })
      );
    };
  const addFilter = () => {
    if (currentFilter.columna && currentFilter.valor) {
      setFilters((prevFilters) => [...prevFilters, currentFilter]);
      setCurrentFilter({ columna: '', valor: '' });
    }
  };

  const removeFilter = (index: number) => {
    setFilters((prevFilters) => prevFilters.filter((_, i) => i !== index));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className='table-container'>
      <div className="search-bar-container">
        <div className="search-bar">
          <Select
            className="search-select"
            placeholder="Seleccione campo"
            allowClear
            value={currentFilter.columna}
            onChange={(value) => setCurrentFilter((prev) => ({ ...prev, columna: value }))}
          >
            {columns.map((columna) => (
              searchFields.includes(columna.dataIndex) && (
                <Option key={columna.dataIndex} value={columna.dataIndex}>
                  {columna.title}
                </Option>
              )
            ))}
          </Select>
          <Input
            placeholder="Buscar..."
            value={currentFilter.valor}
            onChange={(e) => setCurrentFilter((prev) => ({ ...prev, value: e.target.value }))}
            className="search-input"
          />
          <Button type="primary" icon={<SearchOutlined />} onClick={addFilter} className="search-button">
            Agregar Filtro
          </Button>
          <Button onClick={clearFilters} className="clear-button">
            Limpiar
          </Button>
        </div>
        {handleAdd && (
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} className="add-button">
            Agregar
          </Button>
        )}
      </div>
      <div className="filter-tags-container">
        {filters.map((filter, index) => (
          <Tag
            key={index}
            closable
            onClose={() => removeFilter(index)}
          >
            {columns.find((col) => col.dataIndex === filter.columna)?.title}: {filter.valor}
          </Tag>
        ))}
      </div>
      <Table
        dataSource={handleSearch()}
        columns={columns}
        scroll={{ x: '100%' }}
        style={{ overflowX: 'auto', marginTop: '20px' }}
        pagination={{ pageSize: 6 }}
        rowKey={rowKey}
        expandable={{
          expandedRowRender: (record) => (
            <div style={{ margin: '10px 0' }}>
              {columns.map((columna) => (
                searchFields.includes(columna.dataIndex) && (
                  <p key={columna.dataIndex}>
                    <strong>{columna.title}:</strong> 
                  </p>
                )
              ))}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default TablaPersonalizada;
