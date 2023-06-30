import { ColorPicker, Input, Button } from 'antd';
import { useState } from 'react';

import MyColorPicker from './MyColorPicker';
const ColorOption = () => {
  const [colors, setColors] = useState([]);
  console.log('color', colors)
  const handleSave = (index, color, content) => {
    const newColors = [...colors];
    newColors[index] = { index, color, content };
    setColors(newColors);
  };

  const handleAdd = () => {
    const newColor = { index: colors.length, color: null, content: '' };
    setColors([...colors, newColor]);
  };

  return (
    <div>
      <Button onClick={handleAdd}>Add</Button>
      {colors.map(({ index, color, content }) => (
        <MyColorPicker key={index} index={index} color={color} content={content} onSave={handleSave} />
      ))}

    </div>
  );
};

export default ColorOption;