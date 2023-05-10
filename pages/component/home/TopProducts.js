

import p1 from '../../../public/p1.jpg'
import p2 from '../../../public/p2.jpg'
import p3 from '../../../public/p3.jpg'






function TopProducts() {

    console.log("top menu")

    fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: "goooz@samavt" }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data));







    const myproduct = [

        {
            imgUrl: p1,
            name: 'Baby cotton shoes',
            discription: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
            price: '520$',
            numbeSale: 58

        },
        {
            imgUrl: p2,
            name: 'Hoodies for men',
            discription: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
            price: '250$',
            numbeSale: 118

        },
        {
            imgUrl: p3,
            name: 'Long slive t-shirt',
            discription: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
            price: '480$',
            numbeSale: 98

        },
    ]


    // const renderProduct = products.map((data, index) => {
    //     return (
    //         <div className='product' key={index}>
    //             <img className='productImage' src={data.imgUrl} />
    //             <p className='productName'>{data.name}</p>
    //             <p className='productDiscription'>{data.discription}</p>
    //             <p className='productPrice'>{data.price}</p>
    //             <p className='productSale'>{data.numbeSale}<span>sales</span></p>

    //         </div>
    //     )
    // })


    return (
        <div className='TopProducts'>

            <div className='header'>
                <h1>Top Product</h1>

            </div>



        </div>
    )

}
export default TopProducts;