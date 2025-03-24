import React, { useState } from 'react';
import './study.css';
import loan from '../images/exam.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/austrila.png'
import cl from '../images/csn.png'
const makeCall = () => {
    window.location.href = "tel:+6281187094";
};

function EnglishTests() {
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
                <img style={{width:'130%'}} src={loan} alt='USa' />

            
            </div>
            <div className="assessment-card">
                    <h2>Free Immigration Assessment</h2>
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
          <option value="">Select Visa</option>
          <option value="SV">Students Visa</option>
          <option value="BV">Business Visa</option>
          <option value="FV">Family Visa</option>
          <option value="TV">Travel Visa</option>
          <option value="WV">Work Visa</option>
          <option value="VV">Visitor Visa</option>
          <option value="MV">Migrate Visa</option>
          <option value="PR">PR Visa</option>
        </select>
                        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange}></textarea>

                        <button type="submit">BOOK MY FREE ASSESSMENT</button>
                    </form>
                  
                </div>
                <div className='reev'>
<p>Thankyou for helping me understand the Structure of Canadian Language bench mark, and giving me fine details about where i need to focus the most to achieve my goal, Thankyou</p>
<h4>Swetha Reddy</h4>

    <img src={cl} alt="Unimart Logo" class="loggo"/>
    <p class="logo-text">( Canada PR Visa )</p>



                    </div>
                   
                    <div className='ad'>
            <div className='uscontt'>
<h1>Test Preparation for IELTS</h1>
<h5>The International English Language Testing System (IELTS) measures the language<br></br> proficiency of individuals who want to study or work in countries where English <br></br>is used as a language of communication.</h5><br></br>
<p>IELTS exam is conducted worldwide by British Council, UK and IDP, Australia. This test is available <br></br>in two formats academic and general. </p>
<p>Academic IELTS -If applying for higher education or professional registration in English speaking countries. </p>
<p>General IELTS - If migrating to Australia, Canada or the UK.

</p>
  </div>

  <div className='examtab'> 
<h1>IELTS Exam Structure</h1>
<h3>Exam Pattern</h3>
<table>
    <tr>
        <td><b>i) Reading Section</b></td>
        <td>3 Sections, Time Allotted - 20 mins for each section.</td>
    </tr>
    <tr>
        <td><b>ii) Listening Section</b></td>
        <td>4 Sections, Time Allotted - 30 mins.</td>
    </tr>
    <tr>
        <td><b>iii) Speaking Section</b></td>
        <td>Time Allotted - 11 to 15 mins.</td>
    </tr>
    <tr>
        <td><b>iv) Writing Section</b></td>
        <td>2 Sections, Time Allotted - 20 mins for 1 section and 40 mins for the other.</td>
    </tr>
    <tr>
        <td><b>Total Time</b></td>
        <td>2 hours, 45 minutes.</td>
    </tr>
    <tr>
        <td><b>Nature of Exam</b></td>
        <td>Paper Based Test (PBT) & Computer Based Test (CBT).</td>
    </tr>
    <tr>
        <td><b>Total Scores</b></td>
        <td>IELTS is out of 9.0 bands.</td>
    </tr>
</table>
  </div>
  <div className='examtab'> 

<h3>Other Details</h3>
<table>
    <tr>
        <td><b> Website</b></td>
        <td style={{color:'orange'}}>http://www.ieltsidpindia.com/ 
        https://ielts.britishcouncil.org/india</td>
    </tr>
    <tr>
        <td><b> Registration</b></td>
        <td>Online</td>
    </tr>
    <tr>
        <td><b>Test Fees</b></td>
        <td>INR 14,000

</td>
    </tr>
    <tr>
        <td><b>Score Validity

</b></td>
        <td>2 years</td>
    </tr>
    <tr>
        <td><b>Score Reporting

</b></td>
        <td>	
        Applicants can report their IELTS score to maximum of 5 universities as per the STED RO list free of cost after receiving the IELTS result.</td>
    </tr>
    <tr>
        <td><b>Additional Test Score Reporting Fees

</b></td>
        <td>	
        INR 250 per Institution via post INR 1250 via courier.</td>
    </tr>
   
</table>

  </div>
  <div className='ie'><h4>One can appear for IELTS test as many times as required. It is conducted 4 -5 times every<br></br> month. The test score is valid for 2 years.</h4>
</div>
<div className='gre'> 
<h2>Test Preparation for GRE</h2>
<h5>Graduate Record Exam (GRE) is the most commonly required admission test for graduate<br></br> and business schools in the US. GRE is administered by a non-profit organization ETS<br></br> (Educational Testing Service). It is used to assess an individual's critical thinking, analytical <br></br>writing, quantitative reasoning and verbal reasoning abilities.</h5>
<p>GRE Exam Structure</p>
<h6>Exam Pattern</h6>
</div>
<div className='examtab'> 

<table>
    <tr>
        <td><b>i) Verbal Reasoning</b></td>
        <td>Two Sections - 20 questions in each section,
        Time Allotted - 30 mins per section</td>
    </tr>
    <tr>
        <td><b>ii) Quantitative Reasoning</b></td>
        <td>Two Sections - 20 questions in each section, 
        Time Allotted - 35 mins per section.</td>
    </tr>
    <tr>
        <td><b>iii) Analytical Writing Assessment (AWA)</b></td>
        <td>Two Essays - Issue & Argument, 
        Time Allotted - 30mins each.</td>
    </tr>
    <tr>
        <td><b>Total Time</b></td>
        <td>3 hours, 45 minutes

</td>
    </tr>
    <tr>
        <td><b>Nature of Exam</b></td>
        <td>Computer Based Adaptive Test

</td>
    </tr>
    <tr>
        <td><b>Nature of Exam</b></td>
        <td>Paper Based Test (PBT) & Computer Based Test (CBT).</td>
    </tr>
    <tr>
        <td><b>Total Scores</b></td>
        <td>GRE score is out of 340.

</td>
    </tr>
</table>
  </div>
  <div className='examtab'> 
<h5 className='h'>Other Details

</h5>
<table>
    <tr>
        <td><b>Website</b></td>
        <td>http://www.ets.org/gre

</td>
    </tr>
    <tr>
        <td><b>Registration</b></td>
        <td>Online</td>
    </tr>
    <tr>
        <td><b>Test Fees

</b></td>
        <td>US $213

</td>
    </tr>
    <tr>
        <td><b>Score Validity

</b></td>
        <td>5 Years
</td>
    </tr>
    <tr>
        <td><b>Nature of Exam</b></td>
        <td>Computer Based Adaptive Test

</td>
    </tr>
    <tr>
        <td><b>Score Reporting
</b></td>
        <td>There is a provision of reporting your GRE test scores to a maximum of four universities of your choice, the cost of which is built into the GRE test fee you pay</td>
    </tr>
    <tr>
        <td><b>Additional Test Score Reporting Fees

</b></td>
        <td>US $27

</td>
    </tr>
</table>
  </div>
                    <div className='bn'>
                    <button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
  Open Enquiry Form  
</button>
                    </div>
                   

          </div>


            
        </div>
    );
}

export default EnglishTests;
