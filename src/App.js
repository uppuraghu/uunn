import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/home";
import StudyUSA from "./components/studyinabroad/studyUSA";
import StudyUK from "./components/studyinabroad/studyUK";
import StudyCanada from "./components/studyinabroad/studycanada";
import StudyAustralia from "./components/studyinabroad/studyastu";
import About from "./components/studyinabroad/about";
import StudyLoans from "./components/studyinabroad/studylons";
import EnglishTests from "./components/studyinabroad/englishtest";
// import Blog from "./components/studyinabroad/blog";
import Contact from "./components/studyinabroad/contactus";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studyusa" element={<StudyUSA />} />
        <Route path="/studyuk" element={<StudyUK />} />
        <Route path="/studycanada" element={<StudyCanada />} />
        <Route path="/studyaustralia" element={<StudyAustralia />} />
        <Route path="/about" element={<About />} />
        <Route path="/studyloans" element={<StudyLoans />} />
        <Route path="/englishtests" element={<EnglishTests />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;