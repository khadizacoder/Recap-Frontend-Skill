import React, { use } from 'react'
import Post from './Post';

export default function Posts({postPromiss}) {
  const postData = use(postPromiss);
  const posts = postData;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-6'>Total Posts : {posts.length}</h1>

      {
        posts.map(post => <Post post={post} />)
      }
    </div>
  )
}
