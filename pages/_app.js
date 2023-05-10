import '@/styles/globals.css'

import { Provider } from "react-redux";
import { store } from "./store";

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from "react-i18next";

import TopMenu from './component/TopMenu'
import SideBarMenu from './component/SideBarMenu';

import { useState  } from 'react';


function App({ Component, pageProps }) {

  const [direction, setDirection] = useState("ltr")
  const { i18n } = useTranslation();


  const mydirection = () => {
    if (i18n.language === "en") {

      setDirection("ltr")
    } else if (i18n.language === "fa") {

      setDirection("rtl")

    } else {
      setDirection("rtl")

    }

  }




  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <div className='container' dir={"ltr"}>

          <SideBarMenu ></SideBarMenu>

          <TopMenu ></TopMenu>
          <div className='Dashborde' >
            <Component {...pageProps} />
          </div>
        </div>
      </I18nextProvider>
    </Provider >
  )
}

export default App
