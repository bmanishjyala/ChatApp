import { useState } from "react";
import "./App.css";
export default function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const {name, email} = user;
    if(name && email){
      const res = await fetch(
        "https://contact-b8ba8-default-rtdb.firebaseio.com/reactform.json",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            name,
            email,
          }),
        }
      );
      if(res){
       clear();
        alert("Data Submitted");
      }
    }
    else {
      alert("Fill All The Fields First")
    }
    }
   function clear(){
    setUser({
      name: "",
      email: "",
    });
   }

       
  return (
    <>
      <div className="main_content">
        <div className="contact_group">
          <h1>Contact Form</h1>

          <form className="container my-3" method="POST">
            <div className="form-floating mb-4 mx-3">
              <input
                autocomplete="off"
                type="text"
                name="name"
                value={user.name}
                onChange={getUserData}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                
              />
              <label>Name</label>
            </div>
            <div className="form-floating  mx-3 ">
              <input
                autocomplete="off"
                name="email" 
                value={user.email}
                onChange={getUserData}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="abc@example.com"
              />
              <label>Email address</label>
            </div>

            <div className="my-3" id="btn">
              <button
                type="submit"
                onClick={postData}
                className="btn btn-success mx-2"
              >
                Submit <i className="fas fa-arrow-right"></i>
              </button>
              <button type="button" onClick={clear} className="btn btn-danger">
                Clear <i className="fas fa-trash"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
