import { Button, Divider, Select, Space, InputNumber } from 'antd';
import { useState, useRef } from 'react';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';

let index = 0;

const OtherOption = ({ onSave, index, content }) => {
  const [inputContent, setInputContent] = useState(content);

  const [items, setItems] = useState(['نا موجود']);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const onNameChange = (value) => {
    setName(value);
  };
  const addItem = (e) => {
    e.preventDefault();
    if (!name) {
      inputRef.current?.focus();
      return;
    }
    setItems([...items, name]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleSave = () => {
    onSave(index, inputContent);
  };

  const handleContentChange = (e) => {
    setInputContent(e.target.value);
  };

  return (
    <div style={{
      display: 'flex'
    }}>
      <InputNumber placeholder='نام گزینه' value={inputContent} onChange={handleContentChange} />
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
              <InputNumber
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

export default OtherOption;