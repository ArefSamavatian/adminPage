import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';
import { useRef, useState } from 'react';

const App = ({ onOptionSelect }) => {
  const [items, setItems] = useState(['رنگ', 'سایز']);
  const [custom, setCustom] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const inputRef = useRef(null);

  const onCustomChange = (event) => {
    setCustom(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();

    //if input is null dont create
    if (!custom) {
      inputRef.current?.focus();
      return;
    }
    
    setItems([...items, custom]);
    onOptionSelect(custom)
    setCustom('');
    setSelectedItem(custom)


  };

  const handleSelectChange = (value, option) => {
 
    setSelectedItem(value)
    onOptionSelect(value)

  };

  return (
    <Select
      direction='rtl'
      value={selectedItem}
      style={{
        width: 300,
      }}
      placeholder = "انتخاب گزینه"

      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            direction='rtl'
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
              direction='rtl'
              placeholder="نام گزینه را وارد کتید"
              ref={inputRef}
              value={custom}
              onChange={onCustomChange}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              شخصی سازی
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({
        label: item,
        value: item,
      }))}
      onChange={handleSelectChange}
    />
  );
};

export default App;