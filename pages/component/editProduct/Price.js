import { useState } from 'react';
import { Segmented, InputNumber, Collapse, Space, Descriptions } from 'antd';




import classes from './Price.module.css';
import OffType from './OffType';

function Price() {
    const [selectedSegment, setSelectedSegment] = useState('قیمت ثابت');


    const items = [
        {
            key: '1',
            label: 'اضافه کردن تخفیف',
            children: <OffType />,
        },

    ];

    const onChange = (key) => {
        console.log(key);
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

    const handleSegmentChange = (value) => {
        setSelectedSegment(value);
    };

    return (
        <>
            <Segmented
                block
                className={classes.segment}
                options={['قیمت متغیر', 'قیمت ثابت']}

                value={selectedSegment}
                onChange={handleSegmentChange}
            />
            <div className={classes.tabs}>
                {selectedSegment === 'قیمت ثابت' &&


                    <Space
                        style={{ width: '100%' }}
                        direction="vertical"
                    >
                        <InputNumber
                            style={{ width: '100%' }}
                            formatter={formatNumber}
                            parser={parseNumber}
                            addonAfter="تومان"
                        />
                        <Collapse size="small" items={items} onChange={onChange} />
                    </Space>


                }
                {selectedSegment === 'قیمت متغیر' &&
                    <Descriptions layout="vertical" bordered size=''>
                        <Descriptions.Item label="یک واحد از محصول"  >
                            <InputNumber
                                style={{ width: '100%' }}
                                formatter={formatNumber}
                                parser={parseNumber}
                                addonAfter="تومان"
                            />
                        </Descriptions.Item>
                        <Descriptions.Item label={

                            <Space >
                                <p>از این تعداد بیشتر</p>

                                <InputNumber
                                />
                            </Space>
                        }>

                            <InputNumber
                                style={{ width: '100%' }}
                                formatter={formatNumber}
                                parser={parseNumber}
                                addonAfter="تومان"
                            />
                        </Descriptions.Item>

                    </Descriptions>}
            </div >
        </>
    );
}

export default Price;