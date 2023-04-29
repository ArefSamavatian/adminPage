import './SoldByItem.css'

const items=[
    {
        
        name : 'backPack',
        soldeNumber: 9,
        PercentageOfIncome : '33%'
    },
    {
        
        name : 'T-Shirt',
        soldeNumber: 6,
        PercentageOfIncome : '10%'
    },
    {
        
        name : 'Coat',
        soldeNumber: 9,
        PercentageOfIncome : '33%'
    },
    {
        
        name : 'Necklace',
        soldeNumber: 10,
        PercentageOfIncome : '33%'
    },
    {
        
        name : 'Jeans Pant',
        soldeNumber: 3,
        PercentageOfIncome : '33%'
    },
    {
        
        name : 'Shoes',
        soldeNumber: 9,
        PercentageOfIncome : '33%'
    },
    {
        
        name : 'T-Shirt',
        soldeNumber: 19,
        PercentageOfIncome : '33%'
    },
]


const renderIteam =items.map((data,index)=>{
    return (
    <tr key={index}>
        <td>{data.name}</td>
        <td>{data.soldeNumber}</td>
        <td>{data.PercentageOfIncome}</td>
    </tr>)


})


function SoldByItem(){
    return (
        <div className='SoldByItem'>
            <h1>Sold By Iteam</h1>
           <table>
            <thead>
            <tr>
                <th >Sold By Item</th>
                <th>Number sold</th>
                <th>Percentage of income</th>
            </tr>
            </thead>
            <tbody>
            {renderIteam}
            </tbody>
            
           </table>
        </div>
    )
}


export default SoldByItem