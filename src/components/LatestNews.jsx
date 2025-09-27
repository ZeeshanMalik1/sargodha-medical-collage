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
              src="/images/1755508111_WhatsApp Image 2025-08-14 at 19.13.47_8653c4b9.jpg"
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
                Sargodha Medical College proudly celebrated Pakistan’s 77th
                Independence Day with a dignified flag hoisting ceremony...
              </p>
              <a href="event-details.php?id=9" className="btn-primary-latest">
                Read More
              </a>
            </div>
          </div>

          <div className="event-card-latest">
            <img
              src="/images/1755508230_WhatsApp Image 2025-08-15 at 21.43.16_5b395fd7.jpg"
              alt="14 August Celebrations"
            />
            <div className="card-body-latest">
              <div className="event-date-latest">
                <i className="far fa-calendar-alt"></i> August 14, 2025
              </div>
              <h3 className="card-title-latest">
                14 August Celebrations at Sargodha Medical College
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
              src="/images/1755508369_WhatsApp Image 2025-08-13 at 15.09.38_7b30f1ec.jpg"
              alt="Plantation Drive"
            />
            <div className="card-body-latest">
              <div className="event-date-latest">
                <i className="far fa-calendar-alt"></i> August 13, 2025
              </div>
              <h3 className="card-title-latest">
                Green Pakistan: Plantation Drive
              </h3>
              <p className="card-text-latest">
                On 13 August, SMC organized a plantation drive as part of
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
