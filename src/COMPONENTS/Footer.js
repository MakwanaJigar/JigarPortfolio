import React from 'react';

const Footer = () => {
  return (
    <>

     <div className="container-fluid" style={{height:"80%",width:'auto'}}>
        <hr className='text-light shadow-5'/>
        <div className="row">
            <div className="col-md-4 text-center">
                <h5 className='text-info mb-2 fw-bold'>Technologies</h5>
                <p className='text-light'>ReactJS</p>
                <p className='text-light'>NodeJS</p>
                <p className='text-light'>JavaScript</p>
                <p className='text-light'>HTML/CSS</p>
                <p className='text-light'>Bootstrap/Tailwind</p>    
            </div>
            <div className="col-md-4 text-left">
                <h5 className='text-info fw-bold mb-2'>Contact</h5>
                <p className='text-light'><i className='fa fa-home m-2'></i> 12-Harsiddh Society,Radhanpur Road, Mehsana-384002</p>
                <p><a className='text-light' href='mailto:jigar317.certification@gmail.com'><i className="fa-solid fa-envelope m-2"></i> jigar317.certification@gmail.com</a>
                </p>
                <p>
                <a className='text-light' href='tel:8511721552'><i className='fa fa-mobile m-2'></i> +91 8511721552</a>
                </p>
            </div>
            <div className="col-md-4 text-center">
                <h5 className='text-info fw-bold mb-2'>Social Media</h5>
                <a className='btn btn-light m-2' href='https://www.instagram.com/makwanajigar15/'><i className='fa fa-instagram'></i></a>
                <a className='btn btn-light m-2' href='https://www.linkedin.com/in/makwana-jigar-0a5b0a243/'><i className='fa fa-linkedin'></i></a>
                <a className='btn btn-light m-2' href='https://github.com/MakwanaJigar'><i className='fa fa-github'></i></a>
                <a className='btn btn-light m-2' href='https://www.facebook.com/jigar.makwana.9406'><i className='fa fa-facebook'></i></a>
            </div>
        </div>
     </div>

     <hr className='text-light' />
     <p className='text-secondary text-center'>&copy; 2023 Jigar Makwana. All rights reserved.</p> 
    </>
  );
}

export default Footer;
