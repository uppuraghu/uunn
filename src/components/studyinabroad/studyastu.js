import React, { useState } from 'react';
import './study.css';
import usa from '../images/a.jpg';
import { Link } from "react-router-dom"; 
import logo3 from '../images/l.png';
import glob from '../images/globes.png';
import logo from '../images/austrila.png'
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
        <div className='usmin' >
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
                <img style={{width:'130%'}} src={usa} alt='USA ' />

            
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
            <div className='uscontt' >
<h1>Study in Australia as an international student</h1>
<h5>Studying in Australia is a fantastic way to further your education and career<br></br> prospects.When you study in Australia, you have the opportunity to pursue <br></br>an outstanding education from leading institutions. Australia’s extraordinary<br></br> heritage of innovation means your potential for success is boundless.</h5><br></br>
<p>Australia is one of the top study destinations with an excellent education system. With 8 out<br></br> of 120 World's Top Universities and 5 out of 30 Best Student Cities in the World, Australia is <br></br>home to over 1100 institutions offering a wide range of programs.</p>
<p>According to statistics, 35 Australian universities are among the world’s best-ranked universities.<br></br> The country spends up to 250 million dollars per year in financial aids, scholarships and grants<br></br> for international students to study in Australia.</p>
<p>Known globally as one of the world’s most diverse and welcoming countries, with migrants from <br></br>about 200 countries, the Australian society is a mixture of cultures that blend into a tolerant and   <br></br>relaxed lifestyle. Australia has consistently ranked in the world’s top 10 most liveable countries.</p>  
<p>The contemporary lifestyle and indigenous culture attracts many international students every year.</p>
  </div>
 <div className='elg'>
<h1>Students Visa Eligibility</h1>
<p>Compared to other countries, it is easier to get a student visa for Australia. Students wanting to study in Australia must meet certain requirements to qualify for a visa. Once you are enrolled in a full-time study course you can apply for a visa under Subclass 500.</p>
   <p>With the Student visa (Subclass 500) visa, the visa holder can:

</p>     <ul>
            <li>Enroll in a course participate in an eligible course of study

            </li>
            <li>Bring family members to Australia</li>
            <li>Apply for the visa online in or outside Australia</li>
            <li>Travel to and from the country</li>
            <li>Work for up to 40 hours every two weeks once your course starts
            </li>
        </ul>
        <p>The duration of the via is for five years, you can apply for an extension.

</p>
            </div>
            <div className='req'>
                    <h1>Students Visa Requirements</h1>
                    <ul>
                        <li>✅Issued an electronic Confirmation of Enrolment (eCoE) certificate – this is to confirm your enrolment in an Australian University.</li>
                        <li>✅Genuine Temporary Entrant (GTE) statement – this is proof of your intention to come to Australia only to study and not to settle down here.</li>
                        <li>✅Certified or notarized copies transcript/document of academic results
                        </li>
                        <li>✅Overseas Student Health Cover (OSHC) – approved by the Australian government, this health insurance provides basic medical and hospital<br></br> cover. You can purchase this insurance through your university.</li>
                        <li>✅Results of tests in the English language like IELTS, TOEFL, PTE if you are a non-native English speaker</li>
                        <li>✅Evidence of monetary means for covering all expenses during the period of study
                        </li>
                        <li>✅Financial Requirements – to get your student visa you must prove that you have the funds to cover your course fees, travel, and living costs.
                        </li>
                        <li>✅Character Requirement – you must submit a certificate to prove you have no criminal record.

                        </li>
                        <li>✅Proof of visa fees payment – proof that you have paid the required visa fees.

                        </li>
                        
                    </ul>
                    <button onClick={() => window.open("https://visahub.wporganic.com/enquiry-form/", "_blank")}>  
  Open Enquiry Form  
</button>

            </div><br></br><br></br><br></br>
            </div>
        </div>
    );
}

export default StudyUSA;
