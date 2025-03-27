import React, { useState } from 'react';
import './study.css';
import usa from '../images/canadaa.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/csn.png'
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
<p>It was a pleasant experience with Abroad Options; they were extremely professional and provided me with continuous support. They provided me accurate information and suggestions whenever I was in need of one. Thank you</p>
<h4>Venugopal Reddy M
</h4>

    <img src={logo} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( Canada  Students Visa )</p>



                    </div>
                    <div className='rev'>
<p>Thankyou for your future focused guidance and the time you spent with me answering all my questions and clearing my doubts even before starting the application process.</p>
<h4>Prabhakar Rao G

</h4>

    <img src={logo} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( Canada  Students Visa )</p>



                    </div>
            <div className='uscontc'>
<h1>Study in Canada  as an international student</h1>
<h5>Apply to study in Canada as an international student, extend your study<br></br> permit and find out about working while you study or after you graduate.</h5><br></br>
<p>Canada has many reasons to be counted among the best international study destinations.<br></br> It offers a wide variety of course options ranging from undergraduate diplomas to master’s <br></br>degrees. Research is a key component of Canadian universities and it plays a great role<br></br> at the forefront of technology.</p>
<p>It is a peaceful and safe country and is considered among the best countries to live in. <br></br>Three Canadian cities viz. Vancouver, Toronto and Calgary fall under the top 10 "Most<br></br> Liveable Cities” in the world. </p>
<p>It is also one of the most industrialized countries of the world and has been consistently<br></br> ranking amongst the most stable economies. A small population in a vast, resource rich,<br></br> technically advanced country means that there is always a need for skilled professionals <br></br>and employability rates are high.</p>
            </div>
            <div className='elg'>
<h1>Students Visa Eligibility</h1>
<p>The minimum eligibility criterion is to be a graduate with 50% score from a UGC or AICTE recognized university.</p>
        <ul>
            <li>However, the below factors make the client case an exception and a KB query has to be raised to take confirmation on whether you can enroll the client or not before you sell.
Year Back</li>
            <li>The graduation degree has to be completed within the stipulated time with no-year back.</li>
            <li>Example: B.Com is a 3-year degree. The client should have completed it within 3 years and not more.</li>
            <li>Example: Engineering is a 4-year degree. The client should have completed within 4 years and not more.</li>
            <li>Backlogs The client should not have more than 10 backlogs in his/her graduation period.
</li>
            
        </ul>
            </div>
            <div className='req'>
                    <h1>Students Visa Requirements</h1>
                    <ul>
                        <li>✅Valid Passport </li>
                        <li>✅Attested copies of 10th, 12th and Degree certificates
                        </li>
                        <li>✅Academic references – 3</li>
                        <li>✅Employer references – 2</li>
                        <li>✅SOP (Statement of Purpose)</li>
                        <li>✅An acceptance letter from your education institution
                        </li>
                        <li>✅Proof of payment
                        </li>
                        <li>✅Proof of financial funds
                        </li>
                        <li>✅English Proficiency
                        </li>
                    </ul>
                    <button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
  Open Enquiry Form  
</button>

            </div><br></br><br></br><br></br>
        </div>
    );
}

export default StudyUSA;
