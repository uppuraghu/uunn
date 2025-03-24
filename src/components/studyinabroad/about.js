import React, { useState } from 'react';
import './study.css';
import usa from '../images/usas.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/uusa.png'
import boy from '../images/abtboy.png'
import CountUp from "react-countup";
const makeCall = () => {
    window.location.href = "tel:+6281187094";
};

function StudyUSA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:your-email@example.com?subject=Free Assessment Request&body=
        Name: ${formData.name}%0D%0A
        Email: ${formData.email}%0D%0A
        Phone: ${formData.phone}%0D%0A
        Message: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='usmin'>
            {/* Navbar Section */}
            <div className='logsec'>
                <img style={{ height: '60px', width: '200px', marginTop: '-10px', marginLeft: '70px' }} src={logo3} alt='lg' />
                <img style={{ height: '100px', width: '330px', marginLeft: '300px', marginTop: '-10px' }} className='imgt' src={glob} alt='glb' />
                <button onClick={makeCall} style={{ marginLeft: '460px', borderRadius: '20%' }}>Contact us</button>
            </div>

            <header className="header">
                <nav className="custom-navbar">
                    <ul className="nav-links">
                        <li><Link to="/" className="home-button">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/studyloans">Study Loans</Link></li>
                        <li><Link to="/englishtests">English Tests</Link></li>
                        {/* <li><Link to="/blog">Blog</Link></li> */}
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>

          
         <div className='fle'>
              
            <div className='uscontabt'>
<h1>About Unimart Overseas Consultants
</h1>
<h5>We've been counselling students for Educational Opportunities<br></br> in Foreign countries and have been helping them realise their<br></br> dream of studying abroad.</h5><br></br>
<p>Our expertise lies in helping students in making informed decisions by <br></br>choosing the country, university and program suiting their preferences and <br></br>career aspirations.</p>
<p>We offer best-in-class services to students for applications and visa processing, <br></br>provide coaching for essential standardized tests such as GRE, GMAT and <br></br>English Proficiency Tests such as IELTS, TOEFL (iBT) & PTE. </p>
<p>We offer end-to-end assistance for Overseas Education Loans, which is our <br></br>distinct offering for study abroad aspirants.</p>
<button onClick={makeCall} className="bkk">
        Book your free consultation
      </button>
            </div>
            <div className='boy'>
<img src={boy} alt='fsd'/>
            </div>
            </div>  
           <div className='count'>
            <h1>Why Choose Unimart Overseas?</h1>
            <p>Since our founding, our primary goal has been to provide immigration in all over country and<br></br><span>universities. Our impact is speak louder than our word.</span> </p>
        
        
      <div className='maincount'>
           <div className='ct'> <h2>
        <CountUp start={0} end={25000} duration={3} separator="," />+
      </h2>
      <p>Clients Counselled
      </p>
      </div>
      <div className='ctt'> <h2>
        <CountUp start={0} end={1000} duration={3} separator="," />+
      </h2>
      <p>Successful visas</p>
      </div>
      <div className='cttt'> <h2>
        <CountUp start={0} end={10} duration={3} separator="," />+
      </h2>
      <p>years of combined experience</p>
      </div>
      </div>  
             </div>
             <div className='endabt'>
<h1>Working Together, We Can Help</h1>
<p>As part of our services, we provide personal one-on-one<br></br> counseling to about 1,000+ individual inquiries every <br></br>month for migration, study and work visas. Over 50% of <br></br>our customers are through word-of-mouth. No other<br></br> company understands the clients needs like we do.

</p>
<button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
 CALL FOR A FREE EVALUATION
</button><br></br><br></br><br></br><br></br>

             </div>
        </div>
    );
}

export default StudyUSA;
