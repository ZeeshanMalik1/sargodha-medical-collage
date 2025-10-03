import React from "react";
import "./LatestNews.css";

function LatestNews() {
  return (
    <section className="latest-events-section">
      <div className="smc-container">
        <h2 className="section-title">Latest News & Events</h2>

        <div className="events-grid">
          <div className="event-card-latest">
            <img
              src="/images/IMG-20250929-WA0007.jpg"

              alt="Independence Day Flag Raising Ceremony"
            />
            <div className="card-body-latest">
              <div className="event-date-latest">
                <i className="far fa-calendar-alt"></i> August 14, 2025
              </div>
              <h3 className="card-title-latest">
                Independence Day Flag Raising Ceremony
              </h3>
              <p className="card-text-latest">
                Sargodha Institute of Health Sciences
                 proudly celebrated Pakistan’s 77th Independence Day with a dignified flag hoisting ceremony...
              </p>
              <a href="event-details.php?id=9" className="btn-primary-latest">
                Read More
              </a>
            </div>
          </div>

          <div className="event-card-latest">
            <img
              src="/images/IMG-20250929-WA0006.jpg"

              alt="14 August Celebrations"
            />
            <div className="card-body-latest">
              <div className="event-date-latest">
                <i className="far fa-calendar-alt"></i> August 14, 2025
              </div>
              <h3 className="card-title-latest">
                  Happy Gangster Day
              </h3>
              <p className="card-text-latest">
                The flag ceremony was held at 9:00 AM, followed by an event
                featuring speeches, songs, and student performances...
              </p>
              <a href="event-details.php?id=10" className="btn-primary-latest">
                Read More
              </a>
            </div>
          </div>

          <div className="event-card-latest">
            <img
              src="/images/IMG-20250929-WA0009.jpg"
              alt="Plantation Drive"
            />
            <div className="card-body-latest">
              <div className="event-date-latest">
                <i className="far fa-calendar-alt"></i> August 13, 2025
              </div>
              <h3 className="card-title-latest">
                Cultural Fasitival
              </h3>
              <p className="card-text-latest">
                On 13 August, SIHC organized a plantation drive as part of
                Independence Day celebrations, with students and faculty...
              </p>
              <a href="event-details.php?id=11" className="btn-primary-latest">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="view-all-btn">
          <a href="news-events.php" className="btn-outline-primary-latest">
            View All News & Events <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
