import classes from './previewProduct.module.css'
import React, { useState } from "react";
import Image from 'next/image';
import samplePhoto from '../../../public/scarf.jpg'




import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';





function PreviewProduct() {

  const arrowAnimation = {
    close: {

      rotate: -90,
      transition: { duration: 0.3 },
    },
    open: {

      rotate: -180,
      transition: {
        duration: 0.3,

      },
    },
  };

  const menuAnimation = {
    hidden: {

      height: 0,
      padding: 0,
      transition: { duration: 0.3 },
    },
    show: {

      height: "auto",
      transition: {
        duration: 0.3,

      },
    },
  };



  const [mydata, setMydata] = useState([
    {
      id: 1,
      name: "َشال",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4',
      img: './scarf.png'


    },
    {
      id: 2,
      name: "کت چرم",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4'

    },
    {
      id: 3,
      name: "َشال",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4'

    },
    {
      id: 3,
      name: "َشال",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4'

    },
    {
      id: 4,
      name: "َشال",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4'

    },
    {
      id: 5,
      name: "َشال",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4'

    },
    {
      id: 6,
      name: "َشال",
      price: ['100', '70'],
      totalSell: 12000,
      category: 'زنانه',
      subCategory: 'اکسورس',
      stock: '4'

    },

  ])




  const renderTable = mydata.map((item, index) => (

    <>

      <tr key={index} className={`${classes.trCategory} `}>

        <td>
          <Image src={samplePhoto} width={100} height={100}></Image>
          <p>{item.name}</p>
          <p>{item.id}</p>

        </td>

        <td>
          {item.stock}
        </td>

        <td>
          <p>{`${item.category} > ${item.subCategory}`}</p>
        </td>
        <td>
          <p>{item.price}</p>
        </td>
        <td>
          <p>{item.totalSell}</p>
        </td>

      </tr>

    </>

  ))




  return (
    <div className={`${classes.container} box`}>

      <div className={classes.headerCategory}>

        <div className={classes.searchBox}>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <input type={'search'} placeholder='جستجو' className={classes.searchInput}></input>
        </div>

        <Tooltip title="حذف" placement="top">
          <IconButton >
            <DeleteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="تغییر" placement="top">
          <IconButton >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="ساخت دسته بندی" placement="top">
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>



      </div>
      <div className={classes.tableContainer}>
        <table className={classes.categoryFolder}>
          <thead>
            <tr>

              <th>محصولات</th>
              <th>موجدی</th>
              <th> دسته بندی</th>
              <th>قیمت</th>
              <th>فروش کل </th>


            </tr>
          </thead>

          <tbody className={classes.mytbody} >

            {renderTable}

          </tbody >


        </table>
      </div>
    </div >
  );
}
export default PreviewProduct;