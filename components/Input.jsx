import React from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

export default function Input({name,profile}) {
  const collectionRef = collection(db, "chat");
  const [message, setMessage] = useState(null);
 
  const submit = () => {
    if (message) {
      addDoc(collectionRef, {
        message: message,
        createdAt: serverTimestamp(),
        name:name,
        profile:profile
      });
      setMessage(null);
      document.getElementById("input").value = " ";
    }
  };

  return (
    <div style={{width:"100%",position:"fixed",bottom:"0%"}} className="bg-light py-3  d-flex justify-content-center">
      
        <input
          id="input"
          style={{ width: "95vw" }}
          className="mx-1 px-3 py-2 rounded"
          placeholder="Type something to Chat...."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          autoComplete="off"
        />
        <button id="btn" className="btn btn-dark" onClick={submit}>
          Send
        </button>
  
    </div>
  );
}


