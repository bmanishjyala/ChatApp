import React from "react";
import { db } from "../firebaseConfig";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ShowChat({ cname }) {
  const [doc, setDoc] = useState([]);
  const collectionRef = collection(db, "chat");

  useEffect(() => {
    const unsub = onSnapshot(
      query(collectionRef, orderBy("createdAt", "asc")),
      (snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDoc(documents);
      }
    );
    return () => {
      unsub();
    };
  }, [collection]);
  useEffect(()=>{
  },[collection])
  function scrollToBottom(){
    window.scrollTo(0, document.getElementById("scroll").scrollHeight);

  }
  return (
    <div style={{width:"100%"}} id="scroll" onLoad={scrollToBottom} className="py-5 px-4  d-flex flex-column align-items-start mb-5">
      {doc && doc.map((docs) => {
          return <>
               {(docs.name===cname)? <div key={docs.id} className=' d-flex flex-column align-items-end align-self-end '>
                 <p style={{fontSize:"10px",marginBottom:"-1px"}}>You</p>
                 <div className='d-flex align-items-center' ><img className='rounded-circle mx-2' style={{width:"30px",marginTop:"-9px"}} src={docs.profile} alt="P" /><p className='mds rounded' >{docs.message}</p></div>
             </div>:<div key={docs.id} className=' '>
                    <p  style={{fontSize:"10px",marginBottom:"-1px"}}>{docs.name}</p>
                    <div className='d-flex align-items-center ' ><p className='mds bg-light rounded' >{docs.message}</p><img className='rounded-circle mx-2' style={{width:"30px",marginTop:"-9px"}} src={docs.profile} alt="P" /></div>
                </div>} 
                </>

      })}
    </div>
  );
}
