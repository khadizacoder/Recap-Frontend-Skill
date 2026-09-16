import React from 'react'
import { useLoaderData } from 'react-router'
import User from './User';

export default function Users() {

  const users = useLoaderData();
  console.log(users)

  return (
    <div className='py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
      {
        users.map(user => <User key={user.id} user={user} />)
      }
    </div>
  )
}
