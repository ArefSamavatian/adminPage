
import { ColorPicker, Button, Divider, Select, Space, Input } from 'antd';
import { useState, useRef } from 'react';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';

let index = 0;

const MyColorPicker = ({ onSave, index, color, content }) => {
  const [inputContent, setInputContent] = useState(content);
  const [selectedColor, setSelectedColor] = useState(color);

  const [items, setItems] = useState(['نا موجود']);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };


  const handleSave = () => {
    onSave(index, selectedColor, inputContent);
  };

  const handleContentChange = (e) => {
    setInputContent(e.target.value);
  };

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <div style={{
      display: 'flex'
    }}>
      <ColorPicker color={selectedColor} onChange={handleColorChange} />
      <Input placeholder='نام رنگ' value={inputContent} onChange={handleContentChange} />
      <Select
        direction='rtl'
        style={{
          width: 300,
        }}
        placeholder="وضعیت موجودی"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: '8px 0',
              }}
            />
            <Space
              direction='rtl'
              style={{
                padding: '0 8px 4px',
              }}
            >
              <Input

                placeholder="تعداد موجودی"
                ref={inputRef}
                value={name}
                onChange={onNameChange}
              />
              <Button type="text" icon={<CheckOutlined />} onClick={addItem}>

              </Button>
            </Space>
          </>
        )}
        options={items.map((item) => ({
          label: item,
          value: item,
        }))}
      />
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default MyColorPicker