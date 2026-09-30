import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default function Login() {
  const [user, setUser] = useState(null);

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        console.log(result.user.photoURL);
        setUser(result.user);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleGithubSingUp = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        console.log(result.user)

        const loggedInUser = result.user;
        if(!loggedInUser.email){
          if(loggedInUser.providerData)
          {
            const gitprovider = loggedInUser.providerData.find(p => p.providerId == "github.com")
            if(gitprovider && gitprovider.email)
              loggedInUser.email == gitprovider.email
          }
        }

        setUser(result.user);
        console.log(loggedInUser)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Signout Done")
      setUser(null)
    })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <h2>Please Sign Up</h2>

      {
        user ? <button onClick={handleSignOut} className='py-2 px-4 bg-blue-300 font-semibold mt-5'>Sign Out</button> :
          <div className='grid grid-col'>
            <button onClick={handleGoogleSignUp} className='py-2 px-4 bg-blue-300 font-semibold mt-5'>SignUp With Google</button>
            <button onClick={handleGithubSingUp} className='py-2 px-4 bg-blue-300 font-semibold mt-5'>SignUp With Github</button>
          </div>
      }

      {
        user && <div>
          <img src={user.photoURL} alt="photoURL" />
          <h1>{user.displayName}</h1>
          <h2>{user.email}</h2>
        </div>
      }

    </div>
  )
}
