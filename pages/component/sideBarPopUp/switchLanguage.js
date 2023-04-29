import './switchLanguage.css'

import persian from '../../../public/iran.png'
import english from '../../../public/english (2).png'




function SwitchLanguage({ setLanguage }) {



    const handleSubmit = (data) => {
        setLanguage(data)
        console.log(data)

    }

    return (

        <div className='SwitchLanguage'>

            <div className=' persian hoverIcon' onClick={() => handleSubmit('fa')}>
                <img className='flagImage' src={persian}  ></img>
                <p className='mediumText'>فارسی</p>

            </div>
            <div className='english hoverIcon' onClick={() => handleSubmit('en')}>
                <img className='flagImage' src={english} ></img>
                <p className='mediumText'>English</p>

            </div>

        </div>

    );
}

export default SwitchLanguage;
