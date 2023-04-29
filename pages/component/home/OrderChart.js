import './OrderChart.css'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



function OrderChart() {


    return (
        <div className='OrderChart'>

            <h1 className="TitleOrderChart">Order Chart </h1>
            <div className='chart'>
                <ResponsiveContainer height='100%' width='100%'>
                    <PieChart >

                        <Pie
                            data={data}
                            innerRadius={75}
                            outerRadius={100}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"

                        >


                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}


                        </Pie>

                       
                        <Legend iconType='circle'
                          
                        ></Legend>
                       

                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

    )

}



export default OrderChart;
