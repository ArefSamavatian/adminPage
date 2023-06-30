import { useState } from 'react';

const EditableInputContainer = ({ onDelete, onUpdate, property }) => {
  const [key, setKey] = useState(property.key || '');
  const [value, setValue] = useState(property.value || '');
  const [editing, setEditing] = useState(true);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdate({ key, value });
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
      }}
    >
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        disabled={!editing}
        style={{
          marginRight: '8px',
          border: !editing ? 'none' : undefined,
          backgroundColor: !editing ? 'transparent' : undefined,
          flex: 1,
        }}
      />
      <span style={{ marginRight: '8px', fontWeight: 'bold' }}>:</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!editing}
        style={{
          border: !editing ? 'none' : undefined,
          backgroundColor: !editing ? 'transparent' : undefined,
          flex: 1,
        }}
      />
      {editing ? (
        <button
          style={{
            padding: '8px',
            backgroundColor: '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <button
          style={{
            padding: '8px',
            backgroundColor: '#fff',
            color: '#1890ff',
            border: '1px solid #1890ff',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
      <button
        style={{
          padding: '8px',
          backgroundColor: '#f5222d',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          marginLeft: '8px',
          cursor: 'pointer',
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default EditableInputContainer;