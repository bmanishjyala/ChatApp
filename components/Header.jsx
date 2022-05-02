import React from 'react'
import { signInWithGoogle,auth,provider } from "../firebaseConfig";
import {signInWithPopup} from 'firebase/auth'
export default function Header({name,profile,setName,setProfile}) {
  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      setName(result.user.displayName)
    setProfile(result.user.photoURL)
    }).catch((error)=>{
      console.log(error())
    })
    }
  return (
    <div className='Header'>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand  lead" href="#">
      Chat Application 
    </a>
    {name ? <div className='d-flex justify-content-center align-items-center'> <img className='rounded-circle' style={{width:"40px"}} src={profile} alt="photo" /> <p className='lead pt-3 px-2'>{name}</p></div>:<button onClick={signInWithGoogle} className="btn btn-outline-warning">
        Sign In With Google
      </button>}
  </div>
</nav>
    </div>
  )
}
