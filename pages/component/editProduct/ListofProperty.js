import { useState } from 'react';
import EditableInputContainer from './EditableInputContainer';
import { Button, Divider } from 'antd';

const ListOfProperties = () => {
  const [properties, setProperties] = useState([]);
  console.log('pro',properties)

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
        <div key={index}>
          <EditableInputContainer
          
            onDelete={() => handleDelete(index)}
            onUpdate={(newProperty) => handleUpdate(index, newProperty)}
            property={property}
          />
         <Divider style={{ margin: '10px 0' }} />
        </div>
      ))}
      <Button
        block
        onClick={handleAdd}
      >
        Add Property
      </Button>
    </div>
  );
};

export default ListOfProperties;