import React, { useState } from 'react';

const Contact = () => {

  const [fullname,setFullname] = useState("");
  // console.log(fullname);

  const [email,setEmail] = useState("");
  // console.log(email);

  const [message,setMessage] = useState("");
  // console.log(message);


  const sendEmail = async(e) => {
    e.preventDefault();

    const res = await fetch(' http://localhost:8000/register',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },body:JSON.stringify({
        fullname,
        email,
        message,
      })
    })
    console.log(res);
  }

  return (
    <>

    <div className="container shadow" id='contact' style={{width:'60%',marginTop:'15%',border:'none'}}>
        <h1 className='text-light fw-bold'>Contact <span className='text-info fw-bold '>Me</span></h1>
        <div className="form row mb-3">
            <input type="text" className='form-control col-md-4 mb-3' style={{border:'3px solid #17a2b8'}}
             name='fullname' onChange={(e) => setFullname(e.target.value)}
             placeholder='Full Name' />
            <input type="text" placeholder='Email'
             name='email' onChange={(e) => setEmail(e.target.value)}
             className='form-control col-md-4' style={{border:'3px solid #17a2b8'}}/>
        </div>
        <div className="row">
          <textarea
           name="message" onChange={(e) => setMessage(e.target.value)} 
           className='form-control col-md-8' id="" cols="10" rows="5" placeholder='Message' style={{border:'3px solid #17a2b8'}}></textarea>
        </div>
        <div className="row">
        <a href="" className='btn btn-primary mt-3 col-md-2' onClick={sendEmail}>Send</a>
        </div>
    
        </div> 
    </>
  );
}

export default Contact;
