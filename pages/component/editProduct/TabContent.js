import { Button, Input } from 'antd';
import { useState, useRef } from 'react';
import ColorOption from './ColorOption';
import ListOfotherOption from './ListOfotherOption';

const TabContent = (props) => {
  const { item } = props


  const content = item.label === 'رنگ' ? (
    <ColorOption />
  ) : (
    <ListOfotherOption />
  );

  return content;
};

export default TabContent;