import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';


const data = [
    {
        time: '1 june',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        time: '2 june',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        time: '3 june',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        time: '4 june',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        time: '5 june',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        time: '6 june',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        time: '7june',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




function IncomeChart() {

    return (
        <div className='incomeChartContainer'>
            <div className='IncomeChartTitle'>
                <h1>Sales Report</h1>
            </div>


        <div className='IncomeChart'>
            
            <ResponsiveContainer height='100%' width='100%'>
                <AreaChart

                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 0,
                        bottom: 15,
                    }}

                >

                    <CartesianGrid   vertical={false}  stroke={"#EEEEEE"} />
                    <XAxis dataKey="time" tickMargin={10} />
                    <YAxis tickMargin={10}/>
                    <Tooltip />
                    <Legend align='left' iconType='circle'  wrapperStyle={{bottom : 0 ,left :10}}
                     ></Legend>

                    <Area type="monotone" dataKey="uv" stroke="#6297DC" fill="#6297DC" strokeWidth={3} fillOpacity={0.3} dot={true} />
                </AreaChart>
            </ResponsiveContainer>

        </div>
        </div>
    );

}

export default IncomeChart;
