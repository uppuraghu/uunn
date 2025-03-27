import React, { useState } from 'react';
import logo from '../images/fl.png'; 
import banner from '../images/backimg.png';
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import glb from '../images/globes.png'
import findd from '../images/DreamCourse.png'
import asit from '../images/assistance.png'
import engl from '../images/testPrep.png'
import aust from '../images/austril.jpeg'
import uk from '../images/united-kingdom.jpg'
import canada from '../images/canadaa.jpg'
import us from '../images/us.jpg'
import { Link } from "react-router-dom";
import VisaCards from './visacard';
import contact from '../images/contact.png'
import call from '../images/mobile.png'
import land from '../images/client.png'
import mail from '../images/gmail.png'
import ConsultationForm from './consultfrm';
import { FaWhatsapp } from "react-icons/fa";


// import StudyUSA from '../studyinabroad/studyUSA';


const makeCall = () => {
  window.location.href = "tel:+6281187094";
};

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
 
  return (
    
     
   
    <div className="hmain">
     
      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          Welcome To <span>UNIMART OVERSEAS</span> - A Leading Immigration Company 🌍✈️
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner-container">
        <img className="banner-img" src={banner} alt="Banner" />
      </div>

      {/* Logo and Text Section */}
      <div className="hmsec">
        <img className="logo-img" src={logo} alt="Homeloo" />
        <h1 className="hf1">Study in Best Universities Across the World</h1>
        <p className="hf2">Take the First Step to STUDY ABROAD</p>
      </div>

      {/* Call to Action Button */}
      <button onClick={makeCall} className="bk">
        Book your free consultation
      </button><br></br><br></br><br></br><br></br><br></br><br></br>   <br></br>

     

      {/* Second Page Content */}
     

      
      <div className='pg2'>
      <div className='xz'>
      <h2 className="hd2">
  Start Your Higher Education Journey with 
  <span className="highlight"> AbroadOptions Overseas Consultants</span> 
  and open yourself to a whole new world full of opportunities.
</h2></div><br></br>
         {/* Navbar with Dropdown */}
         <header className="header">
      <nav className="custom-navbar">
        {/* Hamburger Menu for Mobile */}
        <div
          className="hamburger"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          ☰ UNIMART
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Study in Abroad ↓
            </button>
            <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <li>
                <Link to="/studyusa">Study in USA</Link>
              </li>
              <li>
                <Link to="/studyuk">Study in UK</Link>
              </li>
              <li>
                <Link to="/studycanada">Study in Canada</Link>
              </li>
              <li>
                <Link to="/studyaustralia">Study in Australia</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/studyloans">Study Loans</Link>
          </li>
          <li>
            <Link to="/englishtests">English Tests</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Sidebar for Mobile */}
        <div className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
          {/* Close Button */}
          <div
            className="close-btn"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </div>

          <ul className="sidebar-links">
            <li className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Study in Abroad ↓
              </button>
              <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <li>
                  <Link to="/studyusa" onClick={() => setShowSidebar(false)}>
                    Study in USA
                  </Link>
                </li>
                <li>
                  <Link to="/studyuk" onClick={() => setShowSidebar(false)}>
                    Study in UK
                  </Link>
                </li>
                <li>
                  <Link
                    to="/studycanada"
                    onClick={() => setShowSidebar(false)}
                  >
                    Study in Canada
                  </Link>
                </li>
                <li>
                  <Link
                    to="/studyaustralia"
                    onClick={() => setShowSidebar(false)}
                  >
                    Study in Australia
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowSidebar(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/studyloans" onClick={() => setShowSidebar(false)}>
                Study Loans
              </Link>
            </li>
            <li>
              <Link to="/englishtests" onClick={() => setShowSidebar(false)}>
                English Tests
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowSidebar(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

<br></br><br></br>
<div className='glb'>
<img src={glb} alt='glbim' />
</div><br></br><br></br>

{/* {advantage} */}
<h1 className='adv'>Unimart Overseas <span>Advantage</span></h1>
<div className='adpic'>
    <div className='find'>
        <img src={findd} alt='find'/>
        <p>Finding the Program<br/> That’s Right for You</p>
    </div>
    <div className='find'>
        <img src={asit} alt='find'/>
        <p>Curated Expert-led<br/> Application Assistance</p>
    </div>
    <div className='find'>
        <img src={engl} alt='find'/>
        <p>English Assessment<br/>Test Prep On-the-go</p>
    </div>
</div>





<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img src={aust} className="d-block w-100" alt="Australia" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1>Australia</h1>
            <p>
            Australia has world-class educational institutions with great healthcare, post-study work opportunities and excellent quality of living.
            </p>
            <a href="/studyaustralia" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>  

        <div className="carousel-item position-relative">
          <img src={uk} className="d-block w-100" alt="United Kingdom" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1>United Kingdom</h1>
            <p>
            Studying In The UK is definitely a life-changing experience. Quality education at low cost with attractive Scholarships and two years post study work visa
            </p>
            <a href="/studyuk" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="carousel-item position-relative">
          <img src={canada} className="d-block w-100" alt="Canada" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1>Canada</h1>
            <p>
            Canada is undoubtedly the most sought-after countries amongst students. High on academic quality but affordable tuition fee & post study work visa.


            </p>
            <a href="/studycanada" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="carousel-item active position-relative" data-bs-interval="2000">
        <img src={us} className="d-block w-100" alt="United States" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1>United States</h1>
            <p>
            Studying In The United States offers you the wonderful avenue of growing academically, culturally and socially. The USA is truly a land of opportunities.
            </p>
            <a href="/studyusa" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className='freas'>
  <div className='content'>
    <div className='text-container'>
      <h1>Free <span>Assessment</span></h1>
      <p>
        We offer free career counseling and career planning advice to study abroad 
        and settle in leading countries like the <span>USA, UK, Canada, Australia,</span> and more.
      </p>
    </div>
    <button ><Link className='assessment-btn' to="/contact" >Free Assessment  </Link></button>
  </div>
</div>
<div className='sett'>
  <div className='sett-content'>
    <h1>Want to Work or Settle Overseas?</h1>
    <p>
      AbroadOptions provides Free Counselling and Evaluation by carefully analyzing your 
      requirements and suggesting you the best possible solutions.
    </p>
  </div>
</div>
<VisaCards />

<section className="about-section">
  {/* Left Side - Text Content */}
  <div className="text-content">
    <h2>About AbroadOptions Overseas Consultants</h2>
    <p>
      We've been counselling students for Educational Opportunities in 
      foreign countries and have been helping them realize their dream of studying abroad.
    </p>
    <h6>
      Our expertise lies in helping students in making informed decisions by choosing the 
      country, university, and program suiting their preferences and career aspirations. 
      We offer best-in-class services to students for applications and visa processing, 
      provide coaching for essential standardized tests such as <strong>GRE, GMAT</strong> 
      and English Proficiency Tests such as <strong>IELTS, TOEFL (iBT), & PTE</strong>. 
      We offer end-to-end assistance for Overseas Education Loans, which is our distinct 
      offering for study abroad aspirants.
    </h6>
    
    {/* Clicking this will open the phone dialer */}
    <a href="tel:+1234567890" className="counselling-btn">
      GET FREE COUNSELLING
    </a>
  </div>

  {/* Right Side - Image */}
  <div className="image-container">
    <img src={contact} alt="Student" className="rounded-image" />
  </div>
</section>


      <footer>
      <div className='bott'>
  <h1>Connect with us Today</h1>
  <h6>
    Schedule an online appointment through our inquiry form
    <br />
    <span>Free Online Visa Assessment</span>
  </h6>
  <br />

  <div className="contact">
    <img src={land} alt='call' className="call-icon" />
    <a href="tel:04045174985">040 45174985</a>
  </div>

  <div className="contact">
    <img src={call} alt='call' className="call-icon" />
    <a href="tel:+918978779676">+91 8978779676</a>
  </div>

  <div className="contact">
    <img src={mail} alt='email' className="call-icon" />
    <a href="mailto:info@unimartoverseas.com">info@unimartoverseas.com</a>
  </div>

  <p className='ms'>Monday - Saturday<br /> 10:00am - 7:00pm</p>
  <ConsultationForm/>
  <hr></hr>
  <div className='rig'>
<p>Copyright	&copy;2025,Unimart Overseas</p>
{/* <p>All rights reserved</p> */}
  </div>
</div>


      </footer>

          {/* <div className='sub'>
              <h1>Book a Free Consultation</h1>
          </div> */}
         <a
      href="https://wa.me/6281187094"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={40} color="white" />
    </a>

      </div>
    
    </div>
   
  );
}

export default Home;
