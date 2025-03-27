import React, { useState } from 'react';
import './study.css';
import loan from '../images/loans.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/austrila.png'
const makeCall = () => {
    window.location.href = "tel:+6281187094";
};

function StudyLoans() {
        const [showSidebar, setShowSidebar] = useState(false);
    //   const [showDropdown, setShowDropdown] = useState(false);
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
                <img style={{ height: '100px', width: '330px', marginLeft: '300px', marginTop: '-20px' }} className='imgt' src={glob} alt='glb' />
                <button onClick={makeCall} style={{ marginLeft: '360px', borderRadius: '10%' }}>Contact us</button>
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
                <img style={{width:'130%'}} src={loan} alt='USA ' />
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
                <div className='reev'>
<p>I really very happy with the level of your service. Thank you for your support through out my application process.</p>
<h4>Ramu Alishetty</h4>

    <img src={logo} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( Australia Students Visa )</p>



                    </div>
                    <div className='reev'>
<p>your free counselling helped me make an effective decision about my higher education and future career prospects, Thankyou.</p>
<h4>Rajinder Reddy</h4>

    <img src={logo} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( Australia Students Visa )</p>
 </div>
                    <div className='ad'>
            <div className='uscontt'>
<h1>Overseas Education Loan</h1>
<h5>Studying abroad is an important decision and the ultimate deciding factor <br></br>for sure will be the financial aspect as the cost to study abroad and <br></br>other related expenses vary from country to country, university to university,<br></br>and also depend upon the course you want to pursue.</h5><br></br>
<p>Study abroad scholarships and part-time jobs do help you to support your higher education<br></br> and living overseas, however, they might not be sufficient to fund your entire expenses. In <br></br>such a case if you are able to get an education loan, the immediate financial burden can be<br></br> reduced to a great extent. </p>
<p>We have a partner who has an exclusive Overseas Education Loan Division to resolve all your <br></br>queries and provide end to end assistance for overseas education loan. </p>
  </div>
 <div className='elg'>
<p>Our mission is to provide

</p>
 <ul>
            <li>Affordable funding options

            </li>
            <li>Thorough assistance for Overseas Education Loan process
            </li>
            <li>Education loan sanction prior to admission</li>
            <li>Assisting you in showing 'proof of funds' to the Universities
            </li>
           
        </ul>
        <p>To achieve this, proper guidance is required and Advisor can assist you by streamlining the entire process.

</p>
           <p>We thus provide the platform for you to choose the best financing options to fund your overseas education with minimum hassles.</p> </div>
            <div className='req'>
                    <h1>Role of our Partner Loan Advisor
                    </h1>
                    <ul>
                        <li>✅Disseminating information on Education Loan for Studies Overseas
                        </li>
                        <li>✅Checking the eligibility criteria
                        .</li>
                        <li>✅Suggesting the right financial institution to be approached

                        </li>
                        <li>✅Answering all the related queries
                        .</li>
                        <li>✅Making online applications
                        </li>   
                        <li>✅Assisting in documentation and submission of the file to the respective financial institutions
                        </li>
                        
                   
                        
                    </ul>
       <div className='reqqq'>
       <div className='req'>
                    <h1>Apart from Loans our advisor also assists you<br></br> with ancillary services like
                    </h1>
                    <ul>
                        <li>✅Foreign Exchange
                        </li>
                        <li>✅Global Forex Card
                        </li>
                        <li>✅International Sim Card

                        </li>
                        <li>✅Overseas Travel Insurance
                        </li>
                       
                        
                   
                        
                    </ul>
                    <button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
  Open Enquiry Form  
</button>

            </div>
        </div>           



            </div><br></br><br></br><br></br>
            </div>
        </div>
    );
}

export default StudyLoans;
