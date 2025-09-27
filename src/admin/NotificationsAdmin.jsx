import React, { useState } from "react";
import "./NotificationsAdmin.css";

function NotificationsAdmin() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    date: new Date().toISOString().split("T")[0],
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const fileURL = URL.createObjectURL(files[0]);
      setFormData((prev) => ({ ...prev, image: fileURL }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.message) {
      return alert("Title and message are required!");
    }
    const newNote = { ...formData, id: Date.now() };
    setNotes((prev) => [newNote, ...prev]);

    // Reset form
    setFormData({
      title: "",
      message: "",
      date: new Date().toISOString().split("T")[0],
      image: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="notes-admin">
      <div className="toprow">
        <h2>Notifications</h2>
        <button className="btn-add" onClick={() => setShowForm(true)}>
          + Publish
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <form className="note-form" onSubmit={handleSubmit}>
            <h3>Publish Notification</h3>

            <label>
              Title <span>*</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message <span>*</span>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>

            <label>
              Image (optional)
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </label>

            {formData.image && (
              <div className="preview">
                <img src={formData.image} alt="Preview" />
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn-save">Publish</button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="notes-list">
        {notes.length === 0 ? (
          <div className="empty">No notifications yet.</div>
        ) : (
          notes.map((n) => (
            <div className="note-row" key={n.id}>
              <div className="note-content">
                {n.image && <img src={n.image} alt="Notice" className="note-img" />}
                <div>
                  <h3>{n.title}</h3>
                  <p>{n.message}</p>
                  <span className="date">{new Date(n.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="actions">
                <button className="btn-del" onClick={() => handleDelete(n.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationsAdmin;
