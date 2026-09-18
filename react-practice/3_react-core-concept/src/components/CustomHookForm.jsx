import React from 'react'
import useCustomInputFild from './useCustomInputFild';

export default function CustomHookForm() {
    const [name, nameOnChange] = useCustomInputFild('');
    const [password, passwordOnChange] = useCustomInputFild("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} 
            className='flex flex-col w-80 mx-auto space-y-2'>

                <input type="text" name='name' placeholder='name'
                onChange={nameOnChange} 
                defaultValue={name}
                className='p-2 border rounded'/>
                
                <input type="password" name="password" placeholder='password'
                onChange={passwordOnChange}
                defaultValue={password}
                className='p-2 border rounded' />

                <input type="submit" value="Submit" className='bg-gray-200 p-2' />
            </form>
        </div>
    )
}
