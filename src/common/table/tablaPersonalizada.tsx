import React, { useState } from 'react';
import { Table, Button, Input, Select, Tag } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import './tablaPerzonalizada.css';

const { Option } = Select;

interface Props<T> {
  dataSource: T[];
  columns: any[];
  rowKey: string;
  handleAdd?: () => void;
  searchFields: string[];
}

interface Filter {
  column: string;
  value: string;
}

const TablaPersonalizada = <T extends object>({ dataSource, 
    columns, 
    rowKey, 
    handleAdd, 
    searchFields 
  }: Props<T>) => {
    const [filters, setFilters] = useState<Filter[]>([]);
    const [currentFilter, setCurrentFilter] = useState<Filter>({ column: '', value: '' });
  
    const handleSearch = () => {
      return dataSource.filter((item: any) =>
        filters.every((filter) => {
          const itemValue = item[filter.column];
          const filterValue = filter.value.toLowerCase();
  
          if (typeof itemValue === 'number') {
            return itemValue === Number(filterValue);
          }
          return String(itemValue).toLowerCase().includes(filterValue);
        })
      );
    };
  const addFilter = () => {
    if (currentFilter.column && currentFilter.value) {
      setFilters((prevFilters) => [...prevFilters, currentFilter]);
      setCurrentFilter({ column: '', value: '' });
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
            value={currentFilter.column}
            onChange={(value) => setCurrentFilter((prev) => ({ ...prev, column: value }))}
          >
            {columns.map((column) => (
              searchFields.includes(column.dataIndex) && (
                <Option key={column.dataIndex} value={column.dataIndex}>
                  {column.title}
                </Option>
              )
            ))}
          </Select>
          <Input
            placeholder="Buscar..."
            value={currentFilter.value}
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
            {columns.find((col) => col.dataIndex === filter.column)?.title}: {filter.value}
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
              {columns.map((column) => (
                searchFields.includes(column.dataIndex) && (
                  <p key={column.dataIndex}>
                    <strong>{column.title}:</strong> 
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
