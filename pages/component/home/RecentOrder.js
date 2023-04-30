


const RecentOrderData = [
    {
        OrderID: 1,
        ProductName: 'Coach Swagger',
        Unitss: '1 Unit',
        OrderDate: 'Oct 20, 2018',
        OrderCost: '$230',
        Status: 'complate',

    },
    {
        OrderID: 2,
        ProductName: 'Toddler Shoes, Gucci Watch',
        Unitss: '2 Unit',
        OrderDate: 'Oct 20, 2018',
        OrderCost: '$230',
        Status: 'complate',

    },
    {
        OrderID: 3,
        ProductName: 'Hat Black Suits',
        Unitss: '1 Unit',
        OrderDate: 'Oct 20, 2018',
        OrderCost: '$230',
        Status: 'complate',

    },
    {
        OrderID: 4,
        ProductName: 'Backpack Gents, Swimming Cap Slin',
        Unitss: '4 Unit',
        OrderDate: 'Oct 20, 2018',
        OrderCost: '$230',
        Status: 'complate',

    },
    {
        OrderID: 5,
        ProductName: 'Speed 500 Ignite',
        Unitss: '2 Unit',
        OrderDate: 'Oct 20, 2018',
        OrderCost: '$230',
        Status: 'complate',

    }
   
]

const renderChart = RecentOrderData.map((data) => {
    return (<tr key={data.OrderID}>
        <td>
            {data.OrderID}
        </td>
        <td>
            {data.ProductName}
        </td>
        <td>
            {data.Unitss}
        </td>
        <td>
            {data.OrderDate}
        </td>
        <td>
            {data.OrderCost}
        </td>
        <td>
            {data.Status}
        </td>
    </tr>)
})


function RecentOrder() {
    return (
        <div className='RecentOrder'>
            <h1 >Recent Order</h1>
            <table className='table'>

                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Units</th>
                    <th>Order Date</th>
                    <th>Order Cost</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {renderChart}
                </tbody>



            </table>

        </div>
    )
}


export default RecentOrder;



