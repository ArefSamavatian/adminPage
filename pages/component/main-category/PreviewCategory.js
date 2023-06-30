import classes from './previewCategorys.module.css'
import React, { useState } from "react";



import { RiArrowDownSFill } from 'react-icons/ri'

import { BsFolder } from 'react-icons/bs'
import StatusCargory from './StatusCategory';


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';





function PreviewCategory() {

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
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 1,
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 1,
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 1,
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 1,
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 1,
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 1,
      name: "زنونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 2,
          name: "شلوار",
          status: <StatusCargory status='active' />,
        },
        {
          id: 3,
          name: "پیراهن",
          status: <StatusCargory status='active' />,

        },
      ],
    },
    {
      id: 4,
      name: "مردونه",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 5,
          name: "شلوار",
          status: <StatusCargory status='active' />,

        },
        {
          id: 6,
          name: "پیراهن",
          status: <StatusCargory status='active' />,
        },
        {
          id: 6,
          name: "پیراهن",
          status: <StatusCargory status='active' />,
        },
        {
          id: 6,
          name: "پیراهن",
          status: <StatusCargory status='active' />,
        },
      ],
    },
    {
      id: 4,
      name: "اکسسوری",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 5,
          name: "شال",
          status: <StatusCargory status='active' />,

        },
        {
          id: 6,
          name: "کلاه",
          status: <StatusCargory status='active' />,
        },
      ],
    },
    {
      id: 4,
      name: "کفش",
      status: <StatusCargory status='active' />,
      expand: true,
      children: [
        {
          id: 5,
          name: "کلاسیک",
          status: <StatusCargory status='active' />,

        },
        {
          id: 6,
          name: "اسپورت",
          status: <StatusCargory status='active' />,
        },
      ],
    }
  ])

  const shrinkfolder = (index) => {
    console.log('index ', index)

    const updatedData = mydata.map((item, i) => {
      if (i === index) {
        return { ...item, expand: !item.expand };
      }
      return item;
    });
    setMydata(updatedData);

  }




  const renderChilderen = (data, index) => {
    if (mydata[index].expand == true) {
     
      const render = data.map((iteam, index) => {

        return (
          <tr className={`${classes.trCategory} ${classes.trChildeCategory}`} key={index} >

            <td className={`${classes.tdCategoryName} ${classes.childCategoryName}`}>
              <RiArrowDownSFill className={`${classes.arrowIcon} ${classes.icon}`} />
              <BsFolder className={`${classes.folderIcon} ${classes.icon}`} />
              <span className={classes.CategoryName}>
                {iteam.name}
              </span>
            </td>

            <td >

              {iteam.status}

            </td>
            <td>
              <p>2 محصول</p>
            </td>
            {/* <td className={`${classes.tdEditIcon} ${classes.tdChildeEditIcon}`} >
              <EditCategoryFile ></EditCategoryFile>
              <PopUpcategory ></PopUpcategory>
            </td> */}

          </tr>
        )

      })
      return render
    }

  }


  const renderTable = mydata.map((item, index) => (

    <>

      <tr key={index} className={`${classes.trCategory} ${classes.trMainCategory}`}>

        <td className={`${classes.tdCategoryName} ${classes.MainCategoryName}`}>

          <RiArrowDownSFill className={`${classes.arrowIcon} ${classes.icon}`} onClick={() => { shrinkfolder(index) }} />
          <BsFolder className={`${classes.folderIcon} ${classes.icon}`} />

          <span className={classes.CategoryName}>
            {item.name}
          </span>

        </td>
        <td>
          {item.status}
        </td>
        <td>
          <p>2 زیر مجموعه</p>
        </td>
        {/* <td className={`${classes.tdEditIcon} ${classes.tdMainEditIcon}`} >
          <EditCategoryFile className={`${classes.editrIcon} ${classes.icon}`}></EditCategoryFile>

          <PopUpcategory ></PopUpcategory>

        </td> */}

      </tr>

      {renderChilderen(item.children, index)
      }
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

              <th>نام</th>

              <th>وضعیت</th>
              <th>آیتم ها</th>


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
export default PreviewCategory;