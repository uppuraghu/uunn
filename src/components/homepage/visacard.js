import "../homepage/visa.css";

export default function VisaCards() {
  return (
    <div className="visa-container">
      {/* Canada Box */}
      <div className="visa-box">
        <div className="visa-header">
          <div className="visa-globe" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg)" }}></div>
          <h2 className="visa-title">Canada</h2>
        </div>
        <p className="visa-text">
          If you aspire to settle in Canada, Abroadoptions can help you achieve
          your goal. Canada is welcoming one million immigrants by 2023.
        </p>
        <ul className="visa-list">
          {[
            "Permanent Residency Visa",
            "Student Visa",
            "Tourist & Visit Visa",
            "Work Visa",
            "Business Visa",
          ].map((visa) => (
            <li key={visa} className="visa-item">
              {visa}
            </li>
          ))}
        </ul>
        <a href="studycanada" className="visa-link">Read More...</a>
      </div>

      {/* Australia Box */}
      <div className="visa-box">
        <div className="visa-header">
          <div className="visa-globe" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg)" }}></div>
          <h2 className="visa-title">Australia</h2>
        </div>
        <p className="visa-text">
          Australia is a great destination to work and settle with your family
          for its great quality of life and stable economic prospects.
        </p>
        <ul className="visa-list">
          {[
            "Permanent Residency Visa",
            "Student Visa",
            "Tourist & Visit Visa",
            "Work Visa",
            "Business Visa",
          ].map((visa) => (
            <li key={visa} className="visa-item">
              {visa}
            </li>
          ))}
        </ul>
        <a href="studyaustralia" className="visa-link">Read More...</a>
      </div>
    </div>
  );
}

