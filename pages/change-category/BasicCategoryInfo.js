
import React, { useRef, useState, useEffect } from 'react';
import { Input, Radio, Space } from 'antd';


import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import classes from './BasicCategoryInfo.module.css'

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import UploadImage from '../component/editProduct/UploadImage';





function BasicCategoryInfo(props) {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const [parent, setParent] = useState('');
    function handleChange(event) {
        setParent(event.target.value);
    }


    const [date, setDate] = useState('');

    const [category, setCategory] = useState([])

    useEffect(() => {

        renderCategory();
    }, []);

    function renderCategory() {

        console.log('render')

        fetch('/api/category/')
            .then((response) => response.json())
            .then((data) => setCategory(data.category))

    }




    const name = useRef(null);
    const disceription = useRef(null);
    const slug = useRef(null);
    const seotitle = useRef(null);
    const metaDisciription = useRef(null);


    function registerHandler(event) {

        event.preventDefault()


        const category = {
            name: name.current.value,
            disceription: disceription.current.value,
            slug: slug.current.value,
            seotitle: seotitle.current.value,
            metaDisciription: metaDisciription.current.value,
            state: state.current.value,
            date: date ? date.toDate().toLocaleString() : null,
            parent: parent ? parent : null



        }

        console.log('category', category)

        fetch('/api/category/', {
            method: 'POST',
            body: JSON.stringify({ category: category }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    function registerHandlertest(event) {
        event.preventDefault()


        const category = {
            name: name.current.value,
            disceription: disceription.current.value,
            slug: slug.current.value,
            seo: {
                seotitle: seotitle.current.value,
                metaDisciription: metaDisciription.current.value,
            },
            state: {
                status: state.current.value,

            },


            parent: parent ? parent : null

        }

        if (state.current.value === 'date') {
            category.state.date = date ? date.toDate().toLocaleString() : null;
        }

        console.log('category', category)

        fetch('/api/test/', {
            method: 'POST',
            body: JSON.stringify({ test: category }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then((response) => response.json())
            .then((data) => console.log(data))


    }


    return (

        <form className={classes.form} onSubmit={registerHandler}>
            <div className={`box ${classes['basic']}`} >
                <h1 className='title' >اطلاعات اولیه</h1>

                <div className={classes.containerInput}>
                    <label htmlFor='Cname' className='label' >نام دسته بندی</label>
                    <input type='text' name='Cname' id='Cname' ref={name}></input>
                </div>

                <div className={classes.containerInput}>
                    <label className='label' htmlFor="w3review" >توضیحات</label>
                    <textarea id="w3review" name="w3review" rows="4" ref={disceription} cols="50" defaultValue={'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.'}></textarea>
                </div>
                <div className={classes.containerSlug}>
                    <label className='label' htmlFor='slug' >اسلاگ</label>
                    <div className={classes.slug}>
                        <div>
                            <p >/https://example.com/category</p>
                        </div>
                        <input type='text' name='slug' id='slug' ref={slug}></input>
                    </div>

                    <p>شناسه منحصر به فرد قابل خواندن برای انسان. بیش از 255 کاراکتر نباشد.
                    </p>
                </div>
            </div>

            <div className={`box ${classes['basic']}`}>
                <h1 className='title'>بهینه سازی موتور جستجو</h1>
                <p>اطلاعاتی را ارائه دهید که به بهبود کالا کمک کند و دسته بندی را به بالای موتورهای جستجو برساند</p>
                <div className={classes.containerInput} >
                    <label className='label' htmlFor='title' >عنوان صفحه</label>
                    <input type='text' name='title' id='title' ref={seotitle}></input>
                    <p></p>
                </div>

                <div className={classes.containerInput}>
                    <label className='label' htmlFor="w3review">توضیحات متا</label>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" ref={metaDisciription} defaultValue={'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.'} ></textarea>
                    <p></p>
                </div>
            </div>

            <div className={`box ${classes['date']}`}>
                <h1 className='title'>وضعیت</h1>


                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Option A</Radio>
                        <Radio value={2}>Option B</Radio>
                        <Radio value={3}>Option C</Radio>
                        <Radio value={4}>
                            More...
                            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                        </Radio>
                    </Space>
                </Radio.Group>



                <input type="radio" id="html" name="fav_language" value="active" ref={state} />
                <label htmlFor="html">منتشر شده</label><br />
                <input type="radio" id="css" name="fav_language" value="hide" ref={state} />
                <label htmlFor="css">پنهان</label><br />
                <input type="radio" id="javascript" name="fav_language" value="date" ref={state} />
                <label htmlFor="javascript">انتشار در زمان مشخص</label>

                <div style={{ direction: "rtl" }}>
                    <p>زمان انشار</p>

                </div>
            </div>

            <div className={`box ${classes['parent']}`}>
                <p className='title'> زیر مجموعه</p>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={parent}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="main">
                            <em>اصلی</em>
                        </MenuItem>
                        {category.map((category) => (
                            <MenuItem key={category._id} value={category._id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                </FormControl>
            </div>
            <div className='box'>
                <p className='title'>upload image</p>
                <UploadImage />
            </div>

            <button onClick={registerHandler}>save</button>
            <button onClick={registerHandlertest}>save test</button>




        </form >

    )
}

export default BasicCategoryInfo;
