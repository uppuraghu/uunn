import React, { useState } from 'react';
import './study.css';
import usa from '../images/usas.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/uusa.png'
const makeCall = () => {
    window.location.href = "tel:+6281187094";
};

function StudyUSA() {
                const [showSidebar, setShowSidebar] = useState(false);
    
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
                                                   {/* Hamburger Icon for Mobile */}
                                                   <div className="hamburger" onClick={() => setShowSidebar(true)}>
                                                     ☰ UNIMART
                                                   </div>
                                           
                                                   {/* Desktop Navigation */}
                                                   <ul className="nav-links">
                                                     <li>
                                                       <Link to="/" className="home-button">
                                                         Home
                                                       </Link>
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
                                                 </nav>
                                           
                                                 {/* Sidebar for Mobile */}
                                                 <div className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
                                                   {/* Close Button */}
                                                   <div className="close-btn" onClick={() => setShowSidebar(false)}>
                                                     ✖
                                                   </div>
                                                   <ul className="sidebar-links">
                                                     <li>
                                                       <Link to="/" onClick={() => setShowSidebar(false)}>
                                                         Home
                                                       </Link>
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
                                               </header>

            {/* Page Content */}
            <div className='mainusa'>
                <img src={usa} alt='USA ' />

            
            </div>
            <div className="assessment-card">
                    <h2>Free Assessment</h2>
                    <p>Find out your options for visa by completing a free online assessment.</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                        <select
          name="studyDestination"
          value={formData.studyDestination}
          onChange={handleChange}
          required
        >
          <option value="">Select Preferred Study Destination</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
        </select>
                        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange}></textarea>

                        <button type="submit">Submit</button>
                    </form>
                  
                </div>
                <div className='rev'>
<p>It was undoubtedly a great experience with Abroad Options. I am so happy with everything and I loved your service and this was a great experience. Thank you so much for everything and because of Abroad Options i think I was able to achieve my goal. Thankyou once again.</p>
<h4>Santosh Bairi</h4>

    <img src={logo} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( USA Students Visa )</p>



                    </div>
            <div className='uscont'>
<h1>Study in USA as an international student</h1>
<h5>The US universities are able to provide the best possible platform to <br></br>international students, which is evident from their high rankings. The Country’s <br></br>education system offers the most comprehensive coursework to students<br></br> with an equal emphasis on both practical and theoretical learning.</h5><br></br>
<p>The United States of America has been a global leader in the field of education and boasts of a<br></br> lion’s share of top ranked universities according to all major international rankings. Few countries <br></br>offer as many high ranked universities and noble laureate academia, as USA does. As a matter of fact,<br></br> nearly 50 of the top 200 universities in the world are based in USA.</p>
<p>Universities in USA are also credited for innumerable patents and ground-breaking innovations,<br></br> offering a chance to study and compete with some of the finest minds in the respective fields. </p>
<p>Flexibility of applying to different fields of study and a wide variety of Research-Centric Science<br></br>and Technology Courses are the distinguishing features because of which aspirants strive to get <br></br>admission in USA.</p>
            </div>
            <div className='elg'>
<h1>Students Visa Eligibility</h1>
<p>You will generally need the following for your US Student Visa application:</p>
        <ul>
            <li>A valid passport with a validity date at least six months beyond your period of stay
            </li>
            <li>Recent passport size photograph</li>
            <li>Confirmation page of DS-160</li>
            <li>Form I -20</li>
            <li>Payment of application fees for SEVIS</li>
            <li>Application as a non-immigrant</li>
        </ul>
            </div>
            <div className='req'>
                    <h1>Students Visa Requirements</h1>
                    <ul>
                        <li>✅Passport (both original and photocopies)</li>
                        <li>✅Visa application confirmation (DS-160)</li>
                        <li>✅A photograph conforming to U.S. visa rules</li>
                        <li>✅Visa fee payment receipt</li>
                        <li>✅Applicant’s I-20 form</li>
                        <li>✅Applicant’s bank statements, tax records, and employment documents as proof of financial stability</li>
                    </ul>
                    <button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
  Open Enquiry Form  
</button>

            </div><br></br><br></br><br></br>
        </div>
    );
}

export default StudyUSA;
