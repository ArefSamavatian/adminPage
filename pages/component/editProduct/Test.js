import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';
import { useRef, useState } from 'react';

let index = 0;

const Test = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef(null);
  const selectRef = useRef(null);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = name || `New item ${index++}`;
    setTimeout(() => {
        inputRef.current?.focus();
        setDropdownVisible(false); // close the dropdown
      }, 0);
    setItems([...items, newItem]);
    setName('');
  
    setSelectedItem(newItem); // set newly added item as selected
   
  };

  const handleChange = (value, option) => {
    console.log(value); // "lucy"
    console.log(option); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    setSelectedItem(option.label); // set selected item as the placeholder
  };

  const myclick = () => {
    setDropdownVisible(true); // open the dropdown
  };

  return (
    <>
      <button onClick={myclick}>annn</button>
      <Select
        onChange={handleChange}
        value={selectedItem}
        onDropdownVisibleChange={setDropdownVisible}
        open={dropdownVisible}
        style={{
          width: 300,
        }}
        placeholder={selectedItem ? selectedItem : "custom dropdown render"}
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: '8px 0',
              }}
            />
            <Space
              style={{
                padding: '0 8px 4px',
              }}
            >
              <Input
                placeholder="Please enter item"
                ref={inputRef}
                value={name}
                onChange={onNameChange}
              />
              <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                Add item
              </Button>
            </Space>
          </>
        )}
        options={items.map((item) => ({
          label: item,
          value: item,
        }))}
      />
    </>
  );
};

export default Test;