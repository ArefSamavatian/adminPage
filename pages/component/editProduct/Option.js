import { Tabs, Button, Input, Modal } from 'antd';
import { useState, useRef } from 'react';
import TabContent from './TabContent';
import SelectOption from './SelectOption';

const Option = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeKey, setActiveKey] = useState(undefined);
  const [items, setItems] = useState([]);
  const newTabIndex = useRef(0);
  const [selectedOption, setSelectedOption] = useState('');


 

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    setIsModalVisible(true);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    const newPanes = items.filter((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
        return false;
      }
      return true;
    });
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    } else if (newPanes.length === 0) {
      newActiveKey = undefined;
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  const handleModalOk = () => {
    if (!selectedOption) {
      return; // If selectedOption is empty, don't submit the form
    }
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: selectedOption.toString(),
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
    setIsModalVisible(false);
    setSelectedOption(''); // Reset selectedOption after submitting the form
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Button onClick={add}>اضافه کردن گزینه</Button>
      <Tabs
        hideAdd
        direction="rtl"
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
      >
        {items.map((item) => (
          <Tabs.TabPane key={item.key} tab={item.label}>
            <TabContent item={item} />
          </Tabs.TabPane>
        ))}
      </Tabs>

      <Modal
        title="گزینه ها"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        okText="Submit"
        cancelText="Cancel"
        centered
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        style={{ top: '-50px' }}
      >
        <SelectOption onOptionSelect={handleOptionSelect}/>
      </Modal>
    </>
  );
};

export default Option;