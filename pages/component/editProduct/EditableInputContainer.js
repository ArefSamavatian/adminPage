import { useState } from 'react';
import { Input, Button, Space } from 'antd';
import classes from './EditableInputContainer.module.css'

const EditableInputContainer = ({ onDelete, onUpdate, property }) => {
  const { TextArea } = Input;
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

    <Space size="small" className={classes.prop}>
      <TextArea
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        autoSize
        allowClear={editing}
        disabled={!editing}
        style={{
          color: "black",
          pointerEvents: editing ? "auto" : "none",
        }}
        bordered={editing ? true : false}
      />

      <TextArea
        className={classes.secendInput}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!editing}
        autoSize
        allowClear={editing}

        style={{
          color: "black",
          pointerEvents: editing ? "auto" : "none",
        }}
        bordered={editing ? true : false}
      />

      <div className={classes.action}>
        {editing ? (

          <Button
            type='text'
            onClick={handleSave}
            size='small'
          >
            Save
          </Button>
        ) : (
          <Button
            type='text'
            onClick={handleEdit}
            size='small'
          >
            Edit
          </Button>
        )}
        <Button
          type='text'
          onClick={handleDelete}
          size='small'
        >
          Delete
        </Button>
      </div>
    </Space>

  );
};

export default EditableInputContainer;