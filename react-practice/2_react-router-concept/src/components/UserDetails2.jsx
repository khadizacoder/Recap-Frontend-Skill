import React, { use } from 'react'

export default function UserDetails2({usersPromiss}) {
    const {name} = use(usersPromiss);

  return (
    <div>
        <h2>UserDetails2</h2>
        <p>User name: {name}</p>
    </div>
  )
}
