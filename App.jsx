import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import ShowChat from './components/ShowChat'

import { useState } from 'react';



export default function App() {
  const [name,setName]=useState("")
  const [profile,setProfile]=useState("")
  
  return (
    <>
    <Header name={name} profile={profile} setName={setName} setProfile={setProfile} />
    
    {name && <ShowChat cname={name} />  } 
    {name && <Input  name={name} profile={profile} />   } 
     
    
    </>
  )
}
