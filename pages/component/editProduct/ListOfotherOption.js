import { Button } from 'antd';
import { useState } from 'react'
import OtherOption from './OtherOption';

import MyColorPicker from './MyColorPicker';
const ListOfotherOption = () => {

  const [option, setOption] = useState([]);
  const [optionCount, setoptionCount] = useState(1);

  //this is final 
  console.log('option', option)

  const handleSave = (index, content, state) => {
    const itemIndex = option.findIndex(item => item.index === index);
    if (itemIndex === -1) {
      return; // index not found, do nothing
    }
    const newOption = [...option];
    newOption[itemIndex] = { index, content, state };
    setOption(newOption);
  };

  const handleAdd = () => {
    setoptionCount(optionCount + 1)
    const newOption = { index: optionCount, content: '', state: '' };
    setOption([...option, newOption]);
  };

  const deletIteam = (index) => {
    console.log('delet')
    const newOption = option.filter(item => item.index !== index);
    setOption(newOption);

  }

  return (
    <div>
      <Button onClick={handleAdd}>Add</Button>
      {option.map(({ index, content }) => (
        <OtherOption key={index} index={index} content={content} deletIteam={deletIteam} onSave={handleSave} />
      ))}

    </div>
  );
};

export default ListOfotherOption;