import React from 'react'

export default function SimpleForm() {
    const handleFrom = (e) => {
        e.preventDefault();
        console.log('Form submited')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div className='w-80 mx-auto mt-10'>
            <form onSubmit={handleFrom} className='flex flex-col w-full space-y-4'>
                <input type="text" placeholder='Name' name='name' className='border-1 p-2 rounded' />
                <input type="email" placeholder='Email' name='email' className='border-1 p-2 rounded' />
                <input type="submit" value="submit" className='bg-green-300 p-2 rounded' />
            </form>
        </div>
    )
}
