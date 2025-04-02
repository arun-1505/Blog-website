import React from 'react'
import appwriteService from '../appwrite/config'
 import {Link} from 'react-router-dom'


function PostCard({$id,title,featuredImage}) {
  return (
 <Link to={`/post/${$id}`} className="block" >
     <div className='w-full bg-gray-100 rounded-xl p-4 transition-all duration-300  hover:shadow-lg hover:-translate-y-2   '>
            <div className='w-full justify-center mb-4  '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full h-auto   transition-transform duration-500   hover:scale-105 ' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>

 </Link>
  )
}

export default PostCard
