import React, { useEffect, useState } from "react";
import "./DownloadPage.css";

function DownloadPage() {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/downloads");
        const data = await res.json();
        setDownloads(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDownloads();
  }, []);

  return (
    <div className="download-main">
      <div className="download-page-title">
        <h1 className="download-section-title">Downloads</h1>
      </div>

      <div className="download-container">
        {downloads.length === 0 ? (
          <div className="downloads empty-download">
            <i className="far fa-sad-tear"></i>
            <p>No downloads found. Please check back later!</p>
          </div>
        ) : (
          downloads.map((file, index) => (
            <div
              className="download-card"
              key={file.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="download-title">{file.title}</h3>
              <p className="download-desc">{file.description}</p>
              <a
                href={file.link}
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DownloadPage;
