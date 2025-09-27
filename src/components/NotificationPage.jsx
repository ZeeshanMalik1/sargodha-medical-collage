import React, { useEffect, useState } from "react";
import "./NotificationPage.css";

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/notifications");
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="noti-main">
      <div className="notification-page-title">
        <h1 className="noti-section-title">Notifications</h1>
      </div>

      <div className="notification-container">
        {notifications.length === 0 ? (
          <div className="notification empty">
            <i className="far fa-sad-tear"></i>
            <p>
              Currently, there are no notifications to display. Please check back later!
            </p>
          </div>
        ) : (
          notifications.map((noti, index) => (
            <div key={index} className="notification-card">
              <div className="noti-icon">
                <i className="fas fa-bell"></i>
              </div>
              <div className="noti-content">
                <h3>{noti.title}</h3>
                <p>{noti.message}</p>
                <span className="noti-date">
                  {new Date(noti.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
