import DestinationCard from '@/components/DestinationCard'
import React from 'react'

const DestinationLayout = () => {
    const data = [{
        id:1,
        title:"Sigiriya",
        image:"/image.png",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
        price:"200"
    },
    {
        id:2,
        title:"Sigiriya",
        image:"/image.png",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
        price:"200"
    },
    {
        id:3,
        title:"Sigiriya",
        image:"/image.png",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
        price:"200"
    },
    {
        id:3,
        title:"Sigiriya",
        image:"/image.png",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
        price:"200"
    },
    {
        id:3,
        title:"Sigiriya",
        image:"/image.png",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
        price:"200"
    },{
        id:3,
        title:"Sigiriya",
        image:"/image.png",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
        price:"200"
    },]
  return (
    <div className="w-full h-[90vh] flex flex-col items-center px-[2vw]">
        <h1 className="my-3 text-2xl font-bold">Destination</h1>
        <div className="w-11/12 h-10/12 grid grid-cols-3 grid-rows-2 gap-5">
            {data.map((data,index)=>(
                <DestinationCard key={index} title={data.title} image={data.image} description={data.description} price={data.price} />
            ))}
        </div>
        <button className='my-3 px-5 py-2 bg-green-300 rounded'>Show All</button>
    </div>
  )
}

export default DestinationLayout