
import { Button, Divider, Select, Space, InputNumber, Input } from 'antd';
import { useState, useRef } from 'react';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';

// let index = 0;

const OtherOption = ({ onSave, index, content, deletIteam }) => {
  const [inputContent, setInputContent] = useState(content);

  const [selectedItem, setSelectedItem] = useState('');

  const [items, setItems] = useState(['نا موجود', 'قابل سفارش']);
  const [state, setState] = useState('');
  const inputRef = useRef(null);

  const onstateChange = (event) => {

    setState(event);
  };

  const addItem = (e) => {
    e.preventDefault();






    //if input is null dont create
    if (!state) {
      inputRef.current?.focus();

      return;
    }

    setItems([...items, state]);

    setState('');
    // setTimeout(() => {
    //   inputRef.current?.focus();
    // }, 0);
    setSelectedItem(state)
  };


  const handleSave = () => {
    onSave(index, inputContent, selectedItem);
  };

  const handleContentChange = (e) => {
    setInputContent(e.target.value);
  };

  const handleSelectChange = (value) => {
    if (value === 'نا موجود') {
      setSelectedItem(0);

    } else if (value === 'قابل سفارش') {
      setSelectedItem(-1);

    } else {
      setSelectedItem(value);
    }
  }

  const handleDelet = () => {
    deletIteam(index)
  }

  return (
    <div style={{
      display: 'flex'
    }}>

      <Input placeholder='نام گزینه' value={inputContent} onChange={handleContentChange} />
      <Select
        direction='rtl'
        style={{
          width: 300,
        }}
        placeholder="وضعیت موجودی"
        onChange={handleSelectChange}
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
                value={state}
                onChange={onstateChange}
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
      <Button onClick={handleDelet}>delet</Button>
    </div>
  );
};

export default OtherOption