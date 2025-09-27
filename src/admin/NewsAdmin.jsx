import React, { useState } from "react";
import "./NewsAdmin.css";

function NewsAdmin() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) {
      return alert("Title and date are required");
    }

    const newItem = {
      id: Date.now(),
      title: formData.title,
      date: formData.date,
      description: formData.description,
      image: formData.image ? URL.createObjectURL(formData.image) : null,
    };

    setItems((prev) => [newItem, ...prev]);
    setFormData({ title: "", date: "", description: "", image: null });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="news-admin">
      <div className="news-admin-top">
        <h2>News & Events Manager</h2>
        <button className="btn-add" onClick={() => setShowForm(true)}>
          + Add Event
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <form className="news-form" onSubmit={handleSubmit}>
            <h3>Add News/Event</h3>

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
              Date <span>*</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
              />
            </label>

            <label>
              Image
              <input type="file" name="image" onChange={handleChange} />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn-save">Save</button>
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

      <div className="news-list">
        {items.length === 0 ? (
          <div className="empty">No items. Use Add Event to create.</div>
        ) : (
          items.map((it) => (
            <div className="news-item" key={it.id}>
              <div className="news-info">
                {it.image && <img src={it.image} alt={it.title} className="news-img" />}
                <div>
                  <h3>{it.title}</h3>
                  <p className="meta">{new Date(it.date).toLocaleDateString()}</p>
                  <p>{it.description}</p>
                </div>
              </div>
              <div className="news-actions">
                <button className="btn-edit">Edit</button>
                <button className="btn-del" onClick={() => handleDelete(it.id)}>
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

export default NewsAdmin;
