

import persian from '../../../public/iran.png'
import english from '../../../public/english (2).png'

import Image from 'next/image'
import { useTranslation } from "react-i18next";



function SwitchLanguage() {

    const { i18n } = useTranslation();



    const handleSubmit = (data) => {
        i18n.changeLanguage(data)
    }

    return (

        <div className='SwitchLanguage'>

            <div className=' persian hoverIcon' onClick={() => handleSubmit('fa')}>
                <Image className='flagImage' src={persian}  ></Image>
                <p className='mediumText'>فارسی</p>

            </div>
            <div className='english hoverIcon' onClick={() => handleSubmit('en')}>
                <Image className='flagImage' src={english} ></Image>
                <p className='mediumText'>English</p>

            </div>

        </div>

    );
}

export default SwitchLanguage;
