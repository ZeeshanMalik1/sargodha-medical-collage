import React, { useState } from "react";
import "./SiteSettings.css";

function SiteSettings() {
  const [theme, setTheme] = useState("default");
  const [logo, setLogo] = useState("/images/logo.png");
  const [tempLogo, setTempLogo] = useState(logo);

  const handleLogoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setTempLogo(fileURL);
    }
  };

  const handleSave = () => {
    setLogo(tempLogo);
    alert("Settings saved!");
  };

  const handleReset = () => {
    setTheme("default");
    setLogo("/images/logo.png");
    setTempLogo("/images/logo.png");
  };

  return (
    <div className={`site-settings theme-${theme}`}>
      <h2>⚙️ Site Settings</h2>
      <div className="settings-grid">

        <div className="setting">
          <label>Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="default">Default</option>
            <option value="dark">Dark</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div className="setting">
          <label>Logo URL</label>
          <input
            type="text"
            value={tempLogo}
            onChange={(e) => setTempLogo(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </div>

        <div className="preview">
          <h3>Preview</h3>
          <div className="logo-preview">
            <img src={tempLogo} alt="logo preview" />
          </div>
          <p className="theme-preview">Theme: {theme}</p>
        </div>
      </div>

      <div className="actions">
        <button className="btn-save" onClick={handleSave}>Save</button>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default SiteSettings;
