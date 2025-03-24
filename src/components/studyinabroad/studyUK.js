import React, { useState } from 'react';
import './study.css';
import usa from '../images/united-kingdom.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/ukgl.png'
const makeCall = () => {
    window.location.href = "tel:+6281187094";
};

function StudyUK() {
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

            {/* Page Content */}
            <div className='mainusa'>
                <img className='uk' src={usa} alt='USA ' />

            
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
                <div className='rev2'>
<p>I’m Srihitha Ramasahm. I’m pursuing my MSc in Project Management at University of Northampton. AbroadOptions helped me in finding a beautiful university (University of Northampton) and they have guided me very well. The University options they gave me were more than 10 and they were all in my budget too. Initially, i was in a dilemma to choose a course, i have done my bachelors in commerce and was looking for a masters degree in Management in the UK. So, they suggested me MBA or MSc Project Management would suit my profile really well. After considering the Pros and Cons of both the options, i have chosen MSc Project Management. They helped me in every possible way they could and i’m really happy with all the decisions I’ve made under their guidance. I hope my review helps you to make a decision wisely. Thank you 😊</p>
<h4>Srihitha Ramasahm</h4>

    <img src={logo} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( UK Students Visa )</p>



                    </div>
            <div className='uscont2'>
<h1>Study in UK as an international student</h1>
<h5>The UK has traditionally been one of the world’s leading educational destinations. <br></br>It boasts of centuries-old universities that have a legacy of producing the finest minds<br></br> in the world. Today, it remains one of the best destinations for students seeking <br></br>high-quality education and a welcoming educational environment.</h5><br></br>
<p>The UK has a rich legacy of universities of international repute such as the University of Oxford and the<br></br> University of Cambridge. With 18 universities among the world’s top 100, UK attracts thousands of students <br></br>and researchers every year, including many from India seeking to get admission in UK universities.</p>
<p>It is the world leader in many areas of education which include engineering, science, business, management,<br></br> law, finance, art and design. London, the capital city, has been consistently featuring in the top 10 liveable<br></br> cities of the world for international students. </p>
<p>Its reputation and legacy as an epicentre for scientific research make it a sought-after study destination, <br></br>especially for some of the best thinkers in the world.</p>
            </div>
            <div className='elg'>
<h1>Students Visa Eligibility</h1>
<p>To be eligible for a Tier 4 student visa, you must:</p>
        <ul>
            <li>Have an unconditional offer of a place on a course with a licensed Tier 4 sponsor
            </li>
            <li>Be able to speak, read, write and understand English</li>
            <li>Financial proofs i.e., exhibiting enough money to support yourself and pay for your course</li>
            <li>For short term study visa, you must show the intention to leave the UK within 30 days of the end of your study (i.e., before the end of date of your immigration permission)</li>
            
        </ul>
            </div>
            <div className='req'>
                    <h1>Students Visa Benefits</h1>
                    <ul>
                        <li>✅A current passport or other valid travel documentation</li>
                        <li>✅Evidence of funds to provide your living expenses for the duration of your course</li>
                        <li>✅Confirmation of Acceptance for Studies (CAS) reference number and documents used to obtain CAS</li>
                        <li>✅Passport-sized colour photographs</li>
                        <li>✅Academic Technology Approval Scheme (ATAS) clearance certificate (if required)</li>
                        <li>✅Applicant’s bank statements, tax records, and employment documents as proof of financial stability</li>
                        <li>✅Assessment documentation</li>

                    </ul>
                    <button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
 APPLY FOR VISA
</button>

            </div><br></br><br></br><br></br>
        </div>
    );
}

export default StudyUK;
