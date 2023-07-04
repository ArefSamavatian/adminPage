
import React from 'react';
import { useRef, useState, useEffect } from 'react';

import classes from './EditProduct.module.css'




import TagsInput from '../component/editProduct/TagsInput';




import Price from '../component/editProduct/Price';

import UploadImage from '../component/editProduct/UploadImage';
import ListOfProperties from '../component/editProduct/ListofProperty';
import Parent from '../component/editProduct/Parent';

import Option from '../component/editProduct/Option';


import Test from '../component/editProduct/Test';


// tag 






function EditProduct(props) {


    const [option, setOption] = useState([]);

    function handleOption(event) {
        setOption(event)
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

    const [category, setCategory] = useState([])

    useEffect(() => {

        renderCategory();
    }, []);

    function renderCategory() {



        fetch('/api/parent/')
            .then((response) => response.json())
            .then((data) => setCategory(data.category))
        console.log('render', category)

    }




    const name = useRef(null);
    const disceription = useRef(null);
    const slug = useRef(null);
    const seotitle = useRef(null);
    const metaDisciription = useRef(null);
    const state = useRef(null)

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



    return (

        <form className={classes.form} onSubmit={registerHandler}>
            <div className={`box ${classes['basic']}`} >
                <h1 className='title' >اطلاعات اولیه</h1>

                <div className={classes.containerInput}>
                    <label htmlFor='Cname' className='label' >نام  محصول</label>
                    <input type='text' name='Cname' id='Cname' ref={name}></input>
                </div>

                <div className={classes.containerInput}>
                    <label className='label' htmlFor="w3review" >توضیحات</label>
                    <textarea id="w3review" name="w3review" rows="4" ref={disceription} cols="50" defaultValue={'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.'}></textarea>
                </div>
                <div className={classes.containerSlug}>
                    <label className='label' htmlFor='Cname' >اسلاگ</label>
                    <div className={classes.slug}>
                        <div>
                            <p >/https://example.com/category</p>
                        </div>
                        <input type='text' name='Cname' id='Cname' ref={slug}></input>
                    </div>

                    <p>شناسه منحصر به فرد قابل خواندن برای انسان. بیش از 255 کاراکتر نباشد.
                    </p>
                </div>
            </div>

            <div className={`box ${classes['basic']}`}>
                <h1 className='title'>بهینه سازی موتور جستجو</h1>
                <p>اطلاعاتی را ارائه دهید که به بهبود کالا کمک کند و دسته بندی را به بالای موتورهای جستجو برساند</p>
                <div className={classes.containerInput} >
                    <label className='label' htmlFor='Cname' >عنوان صفحه</label>
                    <input type='text' name='Cname' id='Cname' ref={seotitle}></input>
                    <p></p>
                </div>

                <div className={classes.containerInput}>
                    <label className='label' htmlFor="w3review">توضیحات متا</label>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" ref={metaDisciription} defaultValue={'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.'} ></textarea>
                    <p></p>
                </div>
            </div>

            <div className={`box ${classes['date']}`}>

            </div>
            <div className='box'>
                <p className='title'>  2دسته بندی</p>
                <Parent categoryList={category} />

            </div>


            <div className={`box ${classes['tags']}`}>
                <p className='title'> تگ ها</p>
                <TagsInput />


            </div>
            <div className={`box ${classes['price']}`}>
                <p className='title'>قیمت</p>
                <Price />
            </div>
            <div className={`box ${classes['price']}`}>
                <p className='title'>pic</p>
                <UploadImage />
            </div>
            <div className={`box`}>
                <p className='title'>property</p>
                <ListOfProperties />
            </div>

            <div className={`box`}>
                <p className='title'>option</p>
                <Option handleOption={handleOption} />
            </div>

            <button onClick={registerHandler}>save</button>




        </form >

    )
}

export default EditProduct;
