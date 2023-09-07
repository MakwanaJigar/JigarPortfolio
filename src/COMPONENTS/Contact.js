import React from 'react';

const Contact = () => {
  return (
    <>

    <div className="container shadow" id='contact' style={{width:'60%',marginTop:'15%',border:'none'}}>
        <h1 className='text-light fw-bold'>Contact <span className='text-info fw-bold '>Me</span></h1>
        <div className="form row mb-3">
            <input type="text" className='form-control col-md-4 mb-3' style={{border:'3px solid #17a2b8'}} placeholder='Full Name' />
            <input type="text" placeholder='Email' className='form-control col-md-4' style={{border:'3px solid #17a2b8'}}/>
        </div>
        <div className="row">
          <textarea name="" className='form-control col-md-8' id="" cols="10" rows="5" placeholder='Message' style={{border:'3px solid #17a2b8'}}></textarea>
        </div>
        <div className="row">
        <a href="" className='btn btn-primary mt-3 col-md-2'>Send</a>
        </div>
    
        </div> 
    </>
  );
}

export default Contact;
