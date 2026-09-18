import React from 'react'

export default function FormAction() {
  const handleForm = (formData) => {
    // e.preventDefault();
    console.log(formData.get('name'));
    console.log(formData.get('email'))
  }
  return (
    <div>
        <form action={handleForm} className='flex flex-col w-80 mx-auto space-y-2 mt-10'>
          <input type="text" name='name' placeholder='name' className='border p-2' />
          <input type="email" name="email" placeholder='email' className='border p-2'/>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
