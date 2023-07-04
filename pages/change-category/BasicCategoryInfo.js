
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

import Parent from '../component/editProduct/Parent';


// const dummy = [
//     {
//         _id: 'sadsad',
//         name: 'aref',
//         children: [
//             {
//                 _id: 'pariaid',
//                 name: 'paria',
//                 children: [
//                     {
//                         _id: 'pariaid',
//                         name: 'paria',
//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         _id: 'sadsssad',
//         name: 'ketab',
//         children: [
//             {
//                 _id: 'pariaid',
//                 name: 'paria',
//                 children: [
//                     {
//                         _id: 'pariaid',
//                         name: 'paria',
//                     },
//                 ]
//             },
//         ]
//     },
// ]


function BasicCategoryInfo(props) {

    const [state, setState] = useState(1);
    const handlestate = (e) => {
        console.log('radio checked', e.target.value);
        setState(e.target.value);
    };

    const [parent, setParent] = useState('');
    function handleParent(event) {
        setParent(event)
    }


    const [date, setDate] = useState('');

    const [mycategory, setMycategory] = useState([])

    useEffect(() => {

        renderCategory();
    }, []);

    function renderCategory() {



        fetch('/api/parent/')
            .then((response) => response.json())
            .then((data) => setMycategory(data.treeData))

        console.log('render', mycategory)

    }




    const name = useRef(null);
    const disceription = useRef(null);
    const slug = useRef(null);
    const seotitle = useRef(null);
    const metaDisciription = useRef(null);




    function registerHandler(event) {
        event.preventDefault()

        let categoryDate = date;
        if (state !== "date" || !categoryDate) {
            categoryDate = null;
        }

        const postCategory = {
            name: name.current.value,
            disceription: disceription.current.value,
            slug: slug.current.value,
            seo: {
                seotitle: seotitle.current.value,
                metaDisciription: metaDisciription.current.value,
            },
            status: {
                state: state,
                ...(categoryDate && { date: categoryDate }),

            },

            parent: parent ? parent : null

        }

        if (state === 'date') {
            postCategory.status.date = date ? date.toDate().toLocaleString() : null;
        }

        console.log('category', postCategory)

        fetch('/api/category/', {
            method: 'POST',
            body: JSON.stringify({ category: postCategory }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then((response) => response.json())
            .then((data) => console.log(data))






    }


    return (
        <>

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


                    <Radio.Group onChange={handlestate} value={state}>
                        <Space direction="vertical">
                            <Radio value={'active'}>منتشر شده</Radio>
                            <Radio value={"hide"}>پنهان</Radio>

                            <Radio value={"date"}>
                                انتشار در زمان مشخص
                                {state === "date" ? <DatePicker
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    value={date}
                                    onChange={(date) => {
                                        setDate(date);
                                        console.log(date.toDate().toLocaleString());
                                    }} /> : null}
                            </Radio>
                        </Space>
                    </Radio.Group>

                </div>

                <div className={`box ${classes['parent']}`}>
                    <p className='title'> زیر مجموعه</p>
                    <Parent categoryList={mycategory} handleChange={handleParent} />
                </div>
                <div className='box'>
                    <p className='title'>upload image</p>
                    <UploadImage />
                </div>


                <button >save test</button>




            </form >
          <button onClick={renderCategory}>click</button>
        </>
    )
}

export default BasicCategoryInfo;
