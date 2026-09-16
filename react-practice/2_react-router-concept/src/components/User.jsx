import React, { Suspense, useState } from 'react'
import { Link, useSearchParams } from 'react-router';
import UserDetails from './UserDetails';
import UserDetails2 from './UserDetails2';

export default function User({ user }) {
    const {id, name, email, address} = user;
    const [info, setInfo] = useState(false);
    const usersPromiss = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    return (
        <div className='border-amber-500 border-2 rounded-2xl p-4'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Address: {address.city}</p>
            <Link to={`/users/${id}`} className='text-blue-800 font-semibold underline'>See More</Link>

            <button className='ml-4' onClick={() => setInfo(!info)}>{info ? "Hide" : "Show"} info</button>
            {
                info && <Suspense fallback={<span>Loading data...</span>}>
                    <UserDetails2 usersPromiss={usersPromiss} />
                </Suspense>
            }
        </div>
    )
}
