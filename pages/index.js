import { Fragment } from 'react';
import CardBody from "./component/home/CardBody";
import IncomeChart from './component/home/IncomeChart';
import OrderChart from './component/home/OrderChart';
import RecentOrder from './component/home/RecentOrder';
import SoldByItem from './component/home/SoldByItem';
import TopProducts from './component/home/TopProducts';



function Dashborde() {
  console.log("index")
  return (
    <div className='Dashborde homeDashbord'>

      <CardBody></CardBody>
      <IncomeChart></IncomeChart>
      <OrderChart></OrderChart>
      <RecentOrder></RecentOrder>
      <SoldByItem></SoldByItem>
      <TopProducts></TopProducts>
    </div>
  )
}

export default Dashborde
