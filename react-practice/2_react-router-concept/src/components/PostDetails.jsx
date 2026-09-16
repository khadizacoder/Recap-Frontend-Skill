import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

export default function PostDetails() {
    const postData = useLoaderData();
    const {title, body} = postData;
    // console.log(postData)

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div className='m-6 p-4 rounded-xl border-2 border-blue-500'>
        <h1 className='font-semibold text-lg mb-2'>{title}</h1>
        <p>{body}</p>
        <button onClick={handleNavigate}>Go back</button>
    </div>
    )
}
