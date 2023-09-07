import React from 'react';
import profile from '../AboutIMG/profile-1.jpeg'

const About = () => {
  return (
    <>

     {/* <h1 className='text-light'>About</h1> */}

     <div className="container" id='about' style={{marginTop:'15%'}}>
      <div className="row ">
        <div className="col-md-6 col-12 text-center">
            <img src={profile} alt="" className='ABTIMG shadow p-1 bg-info'/>
        </div>
        <div className="col-md-6 col-12 mb-5">
            <h1 className='text-light fw-bold'>I am <span className='text-info fw-bold'>Web Developer</span> </h1>
            <h6 className='text-light fw-bold'>Experiance: <span className='text-secondary'> 6 Month at Manami Solutions [Ahmedabad]</span></h6>
            <h6 className='text-light fw-bold'>Speciality: <span className='text-secondary'> Responsive & attrective Websites & Web Applications</span></h6>
            <h6 className='text-light fw-bold'>Address: <span className='text-secondary'>12-Harshidh Scoiety,Mehsana-384002</span></h6>
            <h6 className='text-light fw-bold'>Email: <span className='text-secondary'>jigar317.certification@gmail.com</span></h6>
            <h6 className='text-light fw-bold'>Phone: <span className='text-secondary'>+91 8511721552</span></h6>
        </div>
      </div>
     </div>


    </>
  );
}

export default About;
