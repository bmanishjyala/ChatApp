import React from "react";
import { signInWithGoogle } from "../firebaseConfig";

export default function Authentication() {
  return (
    <div>
      <button onClick={signInWithGoogle} className="btn btn-outline-warning">
        Sign In With Google
      </button>
    </div>
  );
}
