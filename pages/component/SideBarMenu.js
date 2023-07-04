

import { useState, useEffect } from 'react';
import Image from 'next/image'

import srcLogo from "../../public/logo-light.png"

import { AiFillHome } from 'react-icons/ai';
import { MdProductionQuantityLimits, MdCategory } from 'react-icons/md';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { AnimatePresence, motion } from 'framer-motion'

import { useTranslation } from 'react-i18next';




function SideBarMenu() {



    const { t } = useTranslation();






    const sideBarTab = [{
        id: 1,

        name: t("SideBar.Home"),
        nameas: 'Homeas',
        icon: <AiFillHome className='SideBaricon icon' />,
        childe: [],
        openChilde: false,
    },
    {
        id: 2,
        name: t("SideBar.Caregory"),
        nameas: 'Categoryas',
        icon: <MdCategory className='SideBaricon icon' />,
        childe: [{ p: "main-category", text: t('SideBar.mainCategory') }, { p: "sub-category", text: t('SideBar.subCategory') }],
        openChilde: false,
    },
    {
        id: 3,
        name: t("SideBar.Products"),
        nameas: 'Productsas',
        icon: <MdProductionQuantityLimits className='SideBaricon icon' />,
        childe: [{ p: 'add-product', text: t("SideBar.AddProduct") }, { p: "list-product", text: t("SideBar.ListProduct") }, { p: "grid-product", text: t("SideBar.GridProduct") }, { p: "product-detail", text: t("SideBar.ProductDetail") }],
        openChilde: false,
    },
    {
        id: 4,
        name: t("SideBar.Orders"),
        nameas: 'Ordersas',
        icon: <BsFillBasket3Fill className='SideBaricon icon' />,
        childe: [{ p: "new-order", text: t("SideBar.NewOrder") }, { p: "order-detail", text: t("SideBar.OrderDetail") }, { p: "order-history", text: t("SideBar.OrderHistory") }, { p: "invoice", text: t("SideBar.invoice") }],
        openChilde: false,
    },
    {
        id: 5,
        name: t("SideBar.NewOrder"),
        nameas: 'Infoas',
        icon: <CgProfile className='SideBaricon icon' />,
        childe: [],
        openChilde: false,
    }
    ]


    const [expandedIndex, setExpandedIndex] = useState(0);
    const [shrinkMenu, setShrinkMenu] = useState(true);
    const [moseOverSide, SetMoseOverSide] = useState(false)
    const [smallSize, setSmallSize] = useState(typeof window !== 'undefined' && window.innerWidth < 750);





    /* toggle when size change between 750px */

    function handleResize() {

        const width = window.innerWidth;

        setSmallSize(width < 750)

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (smallSize) {
            setShrinkMenu(false)
        } else {
            setShrinkMenu(true)
        }

    }, [smallSize]);









    /* mouse enter and out to shrink menu */
    const isShrinkenter = () => {
        if (shrinkMenu !== true) {
            SetMoseOverSide(true)


        }

    }


    const isShrinkout = () => {
        if (shrinkMenu !== true) {
            SetMoseOverSide(false)

        }
    }



    /* different between shrink menu in small and big windows */

    // if (shrinkMenu) {

    //     document.documentElement.style.setProperty('--rootMarginleft', '250px');

    // } else {
    //     if (smallSize) {
    //         document.documentElement.style.setProperty('--rootMarginleft', '0px');

    //     } else {
    //         document.documentElement.style.setProperty('--rootMarginleft', '70px');
    //     }

    // }



    /* animation */

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



    /* which childe is open */

    const setIndex = (index) => {
        if (parseInt(index) != expandedIndex) {
            setExpandedIndex(parseInt(index))
        } else {
            setExpandedIndex(0)
        }
    }


    /*all render */


    const renderArrow = function (data, index) {

        const isArrowOpen = parseInt(index) === expandedIndex


        if (data.childe.length != 0) {

            return (
                <AnimatePresence>

                    {isArrowOpen ?
                        <motion.div className='sideBarArrow icon' variants={arrowAnimation} animate="open" initial="close" exit="close" >
                            <MdOutlineKeyboardArrowDown className='sideBarArrow icon' />
                        </motion.div> :
                        <motion.div className='sideBarArrow icon' variants={arrowAnimation} animate="close" initial="open">
                            <MdOutlineKeyboardArrowDown className='sideBarArrow icon' />
                        </motion.div>
                    }

                </AnimatePresence>
            )
        } else return <></>
    }



    const renderChilde = (data) => {
        /* if couse the when shrink menu unexpand childe element */
        if (moseOverSide) {
            const render = data.map((index) => {
                return (

                    <div key={index.text} className="SidebarChilde hoverIcon" >
                        <p >
                            <p className='SideBarChildeText'> {index.text}</p>

                        </p>

                    </div>
                )
            })
            return render
        } else {
            if (shrinkMenu) {
                const render = data.map((index) => {
                    return (

                        <div key={index.text} className="SidebarChilde hoverIcon" >
                            <p >  <p className='SideBarChildeText'> {index.text}</p></p>

                        </div>
                    )
                })
                return render

            }
        }


    }

    const dropChilde = (data, index) => {
        const isDrop = parseInt(index) === expandedIndex

        const renderanime = isDrop && (

            <motion.div key={data.name} variants={menuAnimation} initial="hidden" exit="hidden"
                animate="show" className={"ContainerChilde"}>
                {renderChilde(data.childe)}

            </motion.div>

        )

        return (
            <AnimatePresence>
                {renderanime}
            </AnimatePresence>
        )

    }




    const renderMenu = sideBarTab.map((data, index) => {

        return (

            <div key={index} className="mainMenu hoverIcon" >

                <div className='ContainerMainMenu hoverIcon' onClick={() => { setIndex(index) }} >
                    {data.icon}
                    <p className='SideBarName' style={{ opacity: shrinkMenu || moseOverSide ? 1 : 0 }} >{data.name}</p>

                    {renderArrow(data, index)}
                </div>

                {dropChilde(data, index)}

            </div>

        )


    });


    return (


        // style={{ width: moseOverSide ? '250px' : "var(--rootMarginleft)" }}

        <ul className='SideBarMenu' style={{ width: moseOverSide ? '250px' : "var(--rootMarginleft)" }}>

            <li className='logoContainer'>
                <div className='toggleMenuicon hoverIcon SideBaricon icon ' onClick={() => setShrinkMenu(!shrinkMenu)} >
                    <BiMenu className='SideBaricon icon ' />
                </div>

                {/* <Image className='logo' style={{ opacity: shrinkMenu || moseOverSide ? 1 : 0 }} src={srcLogo} alt={srcLogo}></Image> */}

            </li>
            <li className='allMenu' onMouseEnter={isShrinkenter} onMouseLeave={isShrinkout} >
                {renderMenu}
            </li>



        </ul>

    );


}

export default SideBarMenu;