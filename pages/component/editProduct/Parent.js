import { Cascader } from 'antd';

const categoryToOption = (category) => {
  return category.map((category) => {
    const option = {
      value: category._id,
      label: category.name,
    };
    if (category.children && category.children.length > 0) {
      option.children = categoryToOption(category.children);
    }
    return option;
  });
};

const onChange = (value) => {
  console.log(value);
};

function Parent(props) {
  const { categoryList } = props;
  const options = categoryToOption(categoryList);

  console.log('categoryList', categoryList);
  console.log('options', options);

  return <Cascader options={options} onChange={onChange} changeOnSelect />;
}

export default Parent;