import React from 'react';

import { useState } from 'react';
import classes from './filter.module.css'


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Checkbox from '@mui/material/Checkbox';

function Filter() {

    console.log('render' , "filter")

    const [mydata, setMydata] = useState([
        {
            id: 1,
            name: "زنونه",

            expand: true,
            children: [
                {
                    id: 2,
                    name: "شلوار",

                },
                {
                    id: 3,
                    name: "پیراهن",


                },
            ],
        },

        {
            id: 4,
            name: "مردونه",

            expand: true,
            children: [
                {
                    id: 5,
                    name: "شلوار",


                },
                {
                    id: 6,
                    name: "پیراهن",

                },
                {
                    id: 6,
                    name: "پیراهن",

                },
                {
                    id: 6,
                    name: "پیراهن",

                },
            ],
        },
        {
            id: 4,
            name: "اکسسوری",

            expand: true,
            children: [
                {
                    id: 5,
                    name: "شال",


                },
                {
                    id: 6,
                    name: "کلاه",

                },
            ],
        },
        {
            id: 4,
            name: "کفش",

            expand: true,
            children: [
                {
                    id: 5,
                    name: "کلاسیک",


                },
                {
                    id: 6,
                    name: "اسپورت",

                },
            ],
        }
    ])

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const renderCategoryChilderen=(data) => {
       const render= data.map((iteam,index)=>{
            console.log(data)
            return (
              
                    <div key={index} className={classes.category}>
                        <span className={classes.categoryChildeName}>
                            {iteam.name}
                        </span>
                        <Checkbox {...label} />
    
                    </div>
    
                
            )
        })
        return render
    
    }

    const renderCategory = mydata.map((iteam, index) => {
        return (
            <div  key={index}>
                <div className={classes.category}>
                    <span className={classes.categoryMainName}>
                        {iteam.name}
                    </span>
                    <Checkbox {...label} />

                </div>
                {renderCategoryChilderen(iteam.children)}
            </div>
        )
    })






    return (
        <div className='box'>
            <h1 className='title'>مدریت فایل ها</h1>
            <div className={classes.categoryContainer}>
                <div className={classes.categoryHeader}>

                    <IconButton >
                        < KeyboardArrowDownIcon />
                    </IconButton>

                    <p className={classes.categoryTitle}>دسته بندی</p>


                    <Tooltip title="تغییر" placement="top">
                        <IconButton >
                            < EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title=" محصول جدید" placement="top">
                        <IconButton >
                            < AddCircleIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="دسته بندی جدید" placement="top">
                        <IconButton >
                            < CreateNewFolderIcon />
                        </IconButton>
                    </Tooltip>
                </div>

                {renderCategory}



            </div>
        </div>
    );
}

export default Filter;