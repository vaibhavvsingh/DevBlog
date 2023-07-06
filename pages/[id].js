import React, { useEffect, useState } from 'react'
import data from '../data'
// import {useRouter} from 'next/router'

function BlogPage({item}) {
  // const router = useRouter();
  // const [item, setItem] = useState()

  // useEffect(()=>{
  //   setItem(data[router.query.id-1])
  //   console.log(router)
  //   console.log(item)
  // },[])

  return ( 
    <div className='flex flex-col my-12 w-[1000px] m-auto'>
        <h1 className=' text-5xl font-serif font-semibold'>{item.title}</h1>
        <p className='mt-4 text-lg text-gray-700'>{item.date} in <strong className='text-black'>{item.category.join(', ')}</strong></p>
        <img className='mt-12' src={item.image} alt="" />
        <p className='text-xl mt-10 text-justify' dangerouslySetInnerHTML={{__html: item.contents}} ></p>
    </div>
  )
}

export const getStaticProps = ({params}) => {
  const item = data[params.id-1]
  return {
    props : {
      item : item
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '3' }
      },
      {
        params: { id: '4' }
      },
      {
        params: { id: '5' }
      },
    ],
    fallback: false
  }
}

export default BlogPage