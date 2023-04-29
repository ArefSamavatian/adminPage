import { createSlice } from "@reduxjs/toolkit";
import { BsFillPersonCheckFill, BsBagCheckFill, BsFillPeopleFill, BsCashCoin } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';


const initialState = {
    dailyVisitors: {
        id: 1,
        label: "carBody.DailyVisitors",
        icon: BsBagCheckFill,
        content: 1000
    },
    dailyOrder: {
        id: 2,
        label: 'carBody.DailyOrder',
        icon: BsFillPeopleFill,
        content: 100
    },
    orderpending: {
        id: 3,
        label: 'carBody.Orderpending',
        icon: BsFillPersonCheckFill,
        content: 1000
    },
    dailyIncome: {
        id: 4,
        label: 'carBody.DailyIncome',
        icon: BsCashCoin,
        content: 1000
    }

};

const cardSlice = createSlice({

    name: 'cards',
    initialState,
    reducers: {
        initialCards(state, action) {

        }
    }
})

export const cardReducer = cardSlice.reducer;