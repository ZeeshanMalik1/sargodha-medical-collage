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
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", alignItems: "center" , justifyContent:"center"}}>
  <iframe
    src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/SIHSsargodha&tabs=timeline&width=1000&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    style={{ border: "none", overflow: "hidden", width: "100%", height: "800px" ,margin:"auto"}}
    scrolling="no"
    frameBorder="0"
    allowFullScreen={true}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  />
</div>
      </div>
    </div>
  );
}

export default NewsandEvents;
