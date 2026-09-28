import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
export default function Login() {
  const [data, setData] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user)
        // console.log(result.user.photoURL)
        setData(result.user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log("SignOut Done")
      setData(null)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h1 className='text-xl mb-5 font-bold'>Please Login</h1>
      {
        data ? <button onClick={handleLogout} className='px-4 py-2 bg-blue-300 font-semibold'>LogOut</button> :
          <button onClick={handleGoogleSignIn} className='px-4 py-2 bg-blue-300 font-semibold'>SignIn With Google</button>
      }

      {
        data && <div>
          <img src={data.photoURL} alt="photo" />
          <h2>Welcome {data.displayName}</h2>
          <h2>{data.email}</h2>
        </div>
      }
    </div>
  )
}
