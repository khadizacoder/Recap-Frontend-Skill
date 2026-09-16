import React, { useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router'

export default function UserDetails() {
    const user = useLoaderData();
    const { address } = user;
    const [home, setHome] = useState(false);

    const navigate = useNavigate();
    if(home)
    {
        navigate('/')
    }

    const location = useLocation();
    console.log(location)

    return (
        <div className='p-4 bg-blue-50 w-full'>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.city}</p>
            <div className='ml-8'>
                <li>{address.street}</li>
                <li>{address.suite}</li>
            </div>
            <button className='py-1.5 px-4 bg-amber-300 rounded mt-4' onClick={() => setHome(true)}>Visite Home</button>
        </div>
    )
}
