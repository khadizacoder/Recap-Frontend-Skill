import React, { useState } from 'react'

export default function ControlledForm() {
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, pass)
    }

    const handlePass = (e) => {
        console.log(e.target.value)
        setPass(e.target.value);

        pass.length < 5 ? setError("Minimum 6 characters required")  : setError("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="" className='flex flex-col w-80 mx-auto space-y-3 mt-10'>

                <input type="text" name='name' placeholder='name' required
                    onChange={(e) => setName(e.target.value)} 
                    className='border p-2' />

                <p>Name: {name}</p>

                <input type="password" name="password"
                    onChange={handlePass} placeholder='password'
                    defaultValue={pass}
                    className='border p-2' />

                <small className="text-red-600">{error}</small>
                <p>Password : {pass}</p>

                <input type="submit" value="Submit"
                    className='bg-gray-300 py-2 cursor-pointer' />

            </form>
        </div>
    )
}
