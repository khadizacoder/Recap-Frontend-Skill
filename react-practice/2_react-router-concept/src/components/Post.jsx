import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router';

export default function Post({post}) {
    const {id, title, body} = post;
    const truncatedBody = body.length > 100 ? body.slice(0, 100) + '...' : body

    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(`/`)
    }

  return (
    <div className='mb-6 p-4 rounded-xl border-2 border-blue-500'>
        <h1 className='font-semibold text-lg mb-2'>{title}</h1>
        <p>{truncatedBody}</p>
        <Link to={`/posts/${id}`}>See More</Link>
        {/* <button className='ml-4' onClick={handleNavigate}>Back</button> */}
    </div>
  )
}
