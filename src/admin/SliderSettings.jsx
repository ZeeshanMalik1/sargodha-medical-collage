import React, { useState } from "react";
import "./SliderSettings.css";

function SliderSettings() {
  const [slides, setSlides] = useState([
    { id: 1, url: "/images/11072020250714508.png" },
    { id: 2, url: "/images/24072020250714558.png" },
    { id: 3, url: "/images/35072020250714928.jpg" },
    { id: 4, url: "/images/47072020250714139.jpg" },
  ]);

  const updateSlide = (index, value) => {
    const copy = [...slides];
    copy[index].url = value;
    setSlides(copy);
  };

  const handleFileUpload = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      updateSlide(index, fileURL);
    }
  };

  const addSlide = () => {
    const newSlide = { id: Date.now(), url: "" };
    setSlides((prev) => [...prev, newSlide]);
  };

  const deleteSlide = (id) => {
    setSlides((prev) => prev.filter((s) => s.id !== id));
  };

  const saveSlide = (id) => {
    alert(`Slide ${id} saved!`);
  };

  return (
    <div className="slider-admin">
      <div className="toprow">
        <h2>🖼️ Slider Settings</h2>
        <button className="btn-add" onClick={addSlide}>+ Add Slide</button>
      </div>

      <div className="slides-list">
        {slides.length === 0 ? (
          <div className="empty">No slides yet. Add one!</div>
        ) : (
          slides.map((s, i) => (
            <div key={s.id} className="slide-row">
              <div className="preview">
                {s.url ? <img src={s.url} alt={`slide-${s.id}`} /> : <span>No image</span>}
              </div>
              <div className="controls">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={s.url}
                  onChange={(e) => updateSlide(i, e.target.value)}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(i, e)}
                />
                <div className="actions">
                  <button className="btn-save" onClick={() => saveSlide(s.id)}>Save</button>
                  <button className="btn-del" onClick={() => deleteSlide(s.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SliderSettings;
