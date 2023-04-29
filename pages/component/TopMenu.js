import './TopMenu.css'


import { AiTwotoneSetting, AiFillBell, AiOutlineSearch } from 'react-icons/ai';


import profilePi from '../../public/myProfile.jpg'

import { motion, AnimatePresence } from 'framer-motion';

import SwitchLanguage from './sideBarPopUp/switchLanguage';

import { useState } from 'react';

import { useTranslation } from "react-i18next";

import persian from '../../public/iran.png'
import english from '../../public/english (2).png'




function TopMenu({handleDirection}) {

    const { i18n } = useTranslation();


    const handlesetLanguage = (newText) => {
     
        i18n.changeLanguage(newText)


    };

    const changeImage = () => {
        if (i18n.language === "en") {
          
            handleDirection('ltr')
            return false
        } else if (i18n.language === "fa") {
            handleDirection('rtl')
          
            return true

        } else {
            return true
        }

    }

    changeImage()

    const [isOpen, setIsOpen] = useState(false)


    const popUp = {
        close: {

            opacity: 0,

            transition: { duration: 0.3 },
        },
        open: {

            opacity: 1,

            transition: {
                duration: 0.3,

            },
        },
    };




    console.log(profilePi)
    return (
        <div className="TopMenu">

            <motion.div className="Setting topIcon hoverIcon" animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 2, repeat: Infinity }}>
                <AiTwotoneSetting size={22} className='icon' ></AiTwotoneSetting>

            </motion.div>

            <div className="Profile topIcon " >
                <img className='profilePic' src={profilePi} ></img>

            </div>

            <div className="notification topIcon hoverIcon" >
                <AiFillBell size={22} className='icon'></AiFillBell>
            </div>

            <div className="language topIcon hoverIcon" onClick={() => setIsOpen(!isOpen)}>
                <img className='flag' src={changeImage() ? persian : english} alt={persian}></img>
                <AnimatePresence>
                    {isOpen &&
                        <motion.div className='conTainerofSwitchLanguage' variants={popUp} animate="open" initial="close" exit="close">
                            <SwitchLanguage setLanguage={handlesetLanguage}>/</SwitchLanguage>
                        </motion.div>
                    }
                </AnimatePresence>

            </div>

            <div className="search topIcon hoverIcon" >
                <input type={'search'} className='searchInput' ></input>
                <AiOutlineSearch size={22} className='icon' />
            </div>





        </div>
    );
}

export default TopMenu;