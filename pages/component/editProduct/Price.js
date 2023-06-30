import { InputNumber, Checkbox, Form } from 'antd';
import { useState } from 'react';

function Price() {
  const [checked, setChecked] = useState(false);
  const [takhfifchecked, settakhfifchecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const handletakhfifCheckboxChange = (event) => {
    settakhfifchecked(event.target.checked);
  };

  const formatNumber = (value) => {
    if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  const parseNumber = (value) => {
    if (value) {
      return value.toString().replace(/,/g, "");
    }
    return "";
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <InputNumber
       
        formatter={formatNumber}
        parser={parseNumber}
        addonAfter="تومان"
      />

      <Checkbox checked={checked} onChange={handleCheckboxChange}>
        قیمت متغیر
      </Checkbox>

      <InputNumber
       
        addonAfter="عدد"
        disabled={!checked}
      />

      <InputNumber
       
        formatter={formatNumber}
        parser={parseNumber}
        addonAfter="تومان"
        disabled={!checked}
      />
    </>
  );
}

export default Price;