import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Axios from 'axios'
import FileDownload from 'js-file-download'

import { message } from 'antd';

// IMAGES
import cartoon from '../BG-Images/hacker-1.jpeg'
import Aos from 'aos';

const Home = () => {

  const Download = (e) => {
      e.preventDefault();
      
      setTimeout(() => {
        message.success("Download Successfully!");
      }, 1000);
      Axios({
        url:'http://localhost:8000',
        method:'GET',
        responseType:'blob'
      }).then((res) => {
        FileDownload(res.data,'/server/Professional Modern CV Resume (3)-1-1.pdf');
      })
  }

  useEffect(() => {
      Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  }, []);

  return (
    <div id='home'>

    
{/* .................Home page ................... */}

<div className="containe-fluid" >

      <div className="row " style={{marginTop:'7%'}}>
          <div className="col-md-6 text-center" style={{marginTop:'7%'}}
          >
              <h2 className='text-primary fw-bold' 
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
          >Hi I'm Jigar Makwana</h2>
              <h4 className='text-light '
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  >
              <Typewriter
                words={["Frontend Developer"]}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              </h4>
              <a className="btn btn-outline-info mt-5 mb-5" onClick={(e) => Download(e)}>Resume</a>
              <div className="container mt-5">
                <a className="btn btn-light mx-2">
                  <i className='fa fa-instagram'></i>
                </a>
                <a href="" className='btn btn-light mx-2'>
                  <i className='fa fa-github'></i>
                </a>
                <a href="" className='btn btn-light mx-2'>
                  <i className='fa fa-linkedin'></i>
                </a>
              </div>

          </div>
          <div className="col-md-6  text-center">
            <img src={cartoon} style={{height:'auto',width:'50%'}} className='img-fluid' alt="" />
          </div>
      </div>

</div>



{/* 
<div class="card mb-3" style={{width: "70vw",height:'50vh',background:'none',marginTop:'8%'}}>
  <div class="row g-0">
   
    <div class="col-md-8" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div class="card-body">
        <h5 class="card-title text-light">HI I'M JIGAR MAKWANA</h5>
        <p class="card-text">
        <h3 class="card-subtitle mb-2 text-warning">
          <Typewriter
            words={["Frontend Developer"]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h3>
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <img src={cartoon}class="img-fluid rounded-start img" style={{width:'40vw',height:'50vh'}}  alt="..."/>
    </div>
  </div>
</div> */}



{/* <div class="card" style={{width:" 80vw",background:'none'}}>
  <div class="card-body">
    <h1 class="card-title text-light">HI I'M JIGAR MAKWANA</h1>
    <h3 class="card-subtitle mb-2 text-warning">
      <Typewriter
            words={["<Frontend Developer/>"]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h3>
          <div className="btn resume btn-dark ">
            Resume
          </div>
  </div>
</div> */}


    </div>
  );
}

export default Home;
