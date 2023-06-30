import { Button } from 'antd';
import { useState } from 'react'
import OtherOption from './OtherOption';

import MyColorPicker from './MyColorPicker';
const ListOfotherOption = () => {
  const [option, setOption] = useState([]);

  const handleSave = (index,  content) => {
    const newoption = [...option];
    newoption[index] = { index,  content };
    setOption(newoption);
  };

  const handleAdd = () => {
    const newColor = { index: option.length, content: '' };
    setOption([...option, newColor]);
  };

  return (
    <div>
      <Button onClick={handleAdd}>Add</Button>
      {option.map(({ index,  content }) => (
        <OtherOption key={index} index={index} content={content} onSave={handleSave} />
      ))}

    </div>
  );
};

export default ListOfotherOption;