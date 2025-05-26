import ExperianceCard from '@/components/ExperianceCard'
import React, { useState } from 'react'

const ExperinceLayout = () => {
    const [background,setBackground] = useState("/image.png");
    const data = [{
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/imagebadulla.jpg"
    },
    {
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/image.png"
    },
    {
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/image.png"
    },
    {
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/image.png"
    },{
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/imagebadulla.jpg"
    },
    {
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/image.png"
    },
    {
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/image.png"
    },
    {
        userimg:"/user.png",
        userName:"Sphoie",
        message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum consequatur illum repellendus illo. Autem totam nemo iusto optio dignissimos saepe, fuga aspernatur molestiae perferendis veniam quod, eveniet modi vel.",
        image:"/image.png"
    }]

  return (
    <div className='w-full h-[90vh] flex items-center px-[2vw] gap-5 relative' >
        <img src={background} alt="" className='w-[100vw] absolute top-0 left-0 h-full object-cover' />
        <div className='w-1/3 h-11/12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-md p-5'>
            <h1 className='text-5xl font-bold text-white'>Experiances</h1>
        </div>
        <div className='w-2/3 h-11/12 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-md p-5'>
            <div className='w-full h-full grid grid-cols-4 grid-rows-2 gap-3'>
                {data.map((d,i)=>(
                    <ExperianceCard key={i} userName={d.userName} userImage={d.userimg} onHover={()=>setBackground(data[i].image)} message={d.message} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ExperinceLayout