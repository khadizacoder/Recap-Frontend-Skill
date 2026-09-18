import React, { useRef } from 'react'

export default function UnControlledForm() {
    const emailRef = useRef('');
    const passwordRef = useRef("");

    const handleForm = (e) => {
        e.preventDefault();
        
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        console.log(`Submited -> ${email}  ${pass}`)
    }
    return (
        <div className='mt-10 text-center'>
            <h2 className='text-2xl font-bold mb-6'>UnControlled Form</h2>

            <form onSubmit={handleForm} action="" className='flex flex-col w-80 mx-auto space-y-3'>
                <input type="email" name="email" placeholder='email'
                    ref={emailRef}
                    className='border rounded p-2' />

                <input type="password" name="password" placeholder='password'
                    ref={passwordRef}
                    className='border rounded p-2' />

                <input type="submit" value="Submit" className='bg-gray-300 p-2' />
            </form>
        </div>
    )
}
