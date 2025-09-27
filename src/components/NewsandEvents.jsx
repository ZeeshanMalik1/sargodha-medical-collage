import React, { useEffect, useState } from "react";
import "./NewsandEvents.css";

function NewsandEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="news-main">
      <div className="News-And-Evnets-title">
        <h2 className="NewsEvents-section-title">News &amp; Events</h2>
      </div>

      <div className="events-grid">
        {events.length === 0 ? (
          <div className="event-empty">
            <i className="far fa-sad-tear"></i>
            <p>No events or news available at the moment. Please check back later!</p>
          </div>
        ) : (
          events.map((event, index) => (
            <div className="event-card-latest" key={event.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={event.image} alt={event.title} />
              <div className="card-body-latest">
                <div className="event-date-latest">
                  <i className="far fa-calendar-alt"></i> {event.date}
                </div>
                <h3 className="card-title-latest">{event.title}</h3>
                <p className="card-text-latest">{event.description}</p>
                <a href={event.link} className="btn-primary-latest">
                  Read More
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewsandEvents;
