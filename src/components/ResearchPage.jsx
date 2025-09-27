import React, { useEffect, useState } from "react";
import "./ResearchPage.css";

function ResearchPage() {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/research");
        const data = await res.json();
        setResearch(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchResearch();
  }, []);

  return (
    <div className="research-page">
      <div className="content-section">
        <h2 className="section5-title">Recent Papers &amp; Projects</h2>

        <div className="research-container">
          {research.length === 0 ? (
            <div className="research empty">
              <i className="far fa-sad-tear"></i>
              <p>
                No research papers or projects to display yet. Please check back
                later!
              </p>
            </div>
          ) : (
            research.map((item, index) => (
              <div key={index} className="research-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-link"
                >
                  View Details
                </a>
                <span className="research-date">
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;
