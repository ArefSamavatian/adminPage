import React from 'react';
import PreviewProduct from '../component/products/PreviewProduct';
import Filter from '../component/products/Filter';
import style from './index.module.css'

function index(props) {
    return (
        <div className={`${style.container} Dashborde`}>
            <Filter />
            <PreviewProduct></PreviewProduct>
        </div>
    );
}

export default index;