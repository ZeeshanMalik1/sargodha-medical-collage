import React, { useState } from "react";
import "./ResearchAdmin.css";

function ResearchAdmin() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    date: new Date().toISOString().split("T")[0],
    file: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file" && files.length > 0) {
      const fileURL = URL.createObjectURL(files[0]);
      setFormData((prev) => ({ ...prev, file: fileURL }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) {
      return alert("Title and abstract are required!");
    }

    if (editingId) {
      setItems((prev) =>
        prev.map((i) =>
          i.id === editingId ? { ...i, ...formData, id: editingId } : i
        )
      );
      setEditingId(null);
    } else {
      const newItem = { ...formData, id: Date.now() };
      setItems((prev) => [newItem, ...prev]);
    }

    setFormData({
      title: "",
      desc: "",
      date: new Date().toISOString().split("T")[0],
      file: "",
    });
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="research-admin">
      <div className="toprow">
        <h2>Research Papers</h2>
        <button className="btn-add" onClick={() => setShowForm(true)}>
          + Add Paper
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <form className="research-form" onSubmit={handleSubmit}>
            <h3>{editingId ? "Edit Paper" : "Add New Paper"}</h3>

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
              Abstract <span>*</span>
              <textarea
                name="desc"
                rows="4"
                value={formData.desc}
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
              Upload File (PDF/Doc optional)
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
            </label>

            {formData.file && (
              <div className="preview-file">
                <a href={formData.file} target="_blank" rel="noreferrer">
                  View Uploaded File
                </a>
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn-save">
                {editingId ? "Update" : "Save"}
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="list">
        {items.length === 0 ? (
          <div className="empty">No papers yet.</div>
        ) : (
          items.map((i) => (
            <div className="row" key={i.id}>
              <div>
                <strong>{i.title}</strong>
                <p>{i.desc}</p>
                <span className="meta">
                  {new Date(i.date).toLocaleDateString()}
                </span>
                {i.file && (
                  <div>
                    <a href={i.file} target="_blank" rel="noreferrer">
                      📄 View File
                    </a>
                  </div>
                )}
              </div>
              <div className="actions">
                <button onClick={() => handleEdit(i)} className="btn-edit">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(i.id)}
                  className="btn-del"
                >
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

export default ResearchAdmin;
