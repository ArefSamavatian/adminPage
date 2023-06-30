
import { BsFillPersonCheckFill, BsBagCheckFill, BsFillPeopleFill, BsCashCoin } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';


function CardBody() {
console.log("card")
    const { t } = useTranslation();


    const dispatch = useDispatch();

    const { dailyVisitors,
        dailyOrder,
        orderpending,
        dailyIncome } = useSelector((state) => {
            return {
                dailyVisitors: state.cards.dailyVisitors,
                dailyOrder: state.cards.dailyOrder,
                orderpending: state.cards.orderpending,
                dailyIncome: state.cards.dailyIncome
            };
        });



    const cardArray = [dailyVisitors, dailyOrder, orderpending, dailyIncome]

    const renderCards = cardArray.map((data) => {
        return (
            <div key={data.id} className='card'>
                <p className='cardCantent'>{data.content}</p>
                <div className='CardContainerIcon'>
                    <data.icon className="cardIcon" />
                </div>

                <p className='cardLabel'>{t(data.label) }</p>


            </div>
        )

    })

    return (

        <div className='CardBody'>
          
            {renderCards}
        </div>
    );
}

export default CardBody;