import React, { use } from 'react'

export default function Users2({usersPromiss}) {
    const users = use(usersPromiss);
    console.log(users);
    
  return (
    <div>Users2</div>
  )
}
