import { useState } from 'react';
import EditableInputContainer from './EditableInputContainer';

const ListOfProperties = () => {
  const [properties, setProperties] = useState([]);

  const handleAdd = () => {
    setProperties([...properties, { key: '', value: '' }]);
  };

  const handleDelete = (index) => {
    const newProperties = [...properties];
    newProperties.splice(index, 1);
    setProperties(newProperties);
  };

  const handleUpdate = (index, property) => {
    const newProperties = [...properties];
    newProperties[index] = property;
    setProperties(newProperties);
  };

  return (
    <div>
      {properties.map((property, index) => (
        <EditableInputContainer
          key={index}
          onDelete={() => handleDelete(index)}
          onUpdate={(newProperty) => handleUpdate(index, newProperty)}
          property={property}
        />
      ))}
      <button
        style={{
          padding: '8px',
          backgroundColor: '#1890ff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '8px',
        }}
        onClick={handleAdd}
      >
        Add Property
      </button>
    </div>
  );
};

export default ListOfProperties;