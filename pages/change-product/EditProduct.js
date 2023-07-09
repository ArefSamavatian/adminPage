import React, { useRef, useState, useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import classes from './EditProduct.module.css';
import TagsInput from '../component/editProduct/TagsInput';
import Price from '../component/editProduct/Price';
import UploadImage from '../component/editProduct/UploadImage';
import ListOfProperties from '../component/editProduct/ListofProperty';
import Parent from '../component/editProduct/Parent';
import Option from '../component/editProduct/Option';

import Test from '../component/editProduct/Test';


function EditProduct(props) {
  const [option, setOption] = useState([]);

  function handleOption(event) {
    setOption(event);
  }

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ];

  const [parent, setParent] = useState('');

  function handleChange(event) {
    setParent(event.target.value);
  }

  const [date, setDate] = useState('');

  const [category, setCategory] = useState([]);

  useEffect(() => {
    renderCategory();
  }, []);

  function renderCategory() {
    fetch('/api/parent/')
      .then((response) => response.json())
      .then((data) => setCategory(data.category))
      .catch((error) => console.log(error));
  }

  const name = useRef(null);
  const disceription = useRef(null);
  const slug = useRef(null);
  const seotitle = useRef(null);
  const metaDisciription = useRef(null);
  const state = useRef(null);

  function registerHandler(event) {
    event.preventDefault();

    const category = {
      name: name.current.value,
      disceription: disceription.current.value,
      slug: slug.current.value,
      seotitle: seotitle.current.value,
      metaDisciription: metaDisciription.current.value,
      state: state.current.value,
      date: date ? date.toDate().toLocaleString() : null,
      parent: parent ? parent : null,
    };

    console.log('category', category);

    fetch('/api/category/', {
      method: 'POST',
      body: JSON.stringify({ category: category }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div onSubmit={registerHandler}
      className={classes.container}>
      <Form layout='vertical'
        className={classes.form}>
        <div className={classes.basic}>
          <div className='box2'>
            <Form.Item
              className={classes.name}
              label='نام  محصول'
              rules={[
                {
                  required: true,
                },
              ]}
              style={{ fontWeight: 'bold' }}
            >
              <Input ref={name} />
            </Form.Item>

            <Form.Item className={classes.disceription} label='توضیحات' style={{ fontWeight: 'bold' }}>
              <Input.TextArea

                ref={disceription} />
            </Form.Item>

            <Form.Item
              className={classes.category}
              label='دسته بندی'
              style={{ fontWeight: 'bold' }}
            >
              <Parent categoryList={category} />
            </Form.Item>

          </div>

          <Form.Item
            label='خصوصیات'
            className={`box2 ${classes.property}`}
            style={{ fontWeight: 'bold' }}>
            <ListOfProperties />
          </Form.Item>

          <Form.Item
            className={`box2 ${classes.property}`}
            style={{ fontWeight: 'bold' }}>
            <Test />
          </Form.Item>





          <Form.Item
            className={classes.price}
            label='قیمت'
            style={{ fontWeight: 'bold' }}
          >
            <Price />
          </Form.Item>

          <Form.Item
            className={classes.option}
            label='option' style={{ fontWeight: 'bold' }}>
            <Option handleOption={handleOption} />
          </Form.Item>

          <Form.Item
            className={classes.tags}
            label='تگ ها'
            style={{ fontWeight: 'bold' }}
          >
            <TagsInput />
          </Form.Item>


        </div>
        <div
          className={classes.UploadImage}
        >
          <Form.Item
            label='تصاویر'
            style={{ fontWeight: 'bold' }}
          >
            <UploadImage />
          </Form.Item>
        </div>



        <div>
          <h1 className='title'>بهینه سازی موتور جستجو</h1>
          <Form.Item
            label='عنوان صفحه'
            style={{ fontWeight: 'bold' }}
          >
            <Input ref={seotitle} />
            <p>
              اطلاعاتی را ارائه دهید که به بهبود کالا کمک کند و دسته بندی را به
              بالای موتورهای جستجو برساند
            </p>
          </Form.Item>

          <Form.Item
            label='توضیحات متا'
            style={{ fontWeight: 'bold' }}
          >
            <Input.TextArea ref={metaDisciription} />
          </Form.Item>

          <Form.Item
            label='اسلاگ'
            dir='ltr' style={{ fontWeight: 'bold' }}>
            <Input
              ref={slug}
              addonBefore='https://example.com/products/'
              defaultValue='myProuduct'
            />
            <p>شناسه منحصر به فرد قابل خواندن برای انسان. بیش از 255 کاراکتر نباشد </p>
          </Form.Item>
        </div>


        <Form.Item>
          <button onClick={registerHandler}>save</button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditProduct;