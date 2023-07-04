import { Cascader } from 'antd';

const categoryToOption = (category) => {

  if (category !== undefined) {
    const mainOption = { value: '', label: 'اصلی' };

    const addChildren = (cat) => {
      const option = {
        value: cat._id,
        label: cat.name
      };

      if (cat.children && cat.children.length > 0) {
        option.children = cat.children.map(addChildren);
      }

      return option;
    };

    return [mainOption, ...category.map(addChildren)];
  }
};





function Parent(props) {
  const { categoryList, handleChange } = props;
  const options = categoryToOption(categoryList);

  const onChange = (value) => {

    if (value !== undefined) {
      const lastValue = value[value.length - 1]; // get the last item in the value array
      console.log('option', lastValue)
      handleChange(lastValue)
    }


  };

  return <Cascader options={options} onChange={onChange} changeOnSelect />;
}

export default Parent;