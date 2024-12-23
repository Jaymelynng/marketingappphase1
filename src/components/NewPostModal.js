import React, { useState } from "react";

function NewPostModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    key: "",
    file: null,
    theme: "",
    content: "",
    caption: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSave = () => {
    if (!formData.date || !formData.title) {
      alert("Date and Title are required!");
      return;
    }
    console.log("Form Submitted", formData);
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Create New Post</h3>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          type="text"
          name="key"
          placeholder="Key (e.g., Important Note)"
          onChange={handleChange}
          value={formData.key}
        />
        <input type="file" name="file" onChange={handleChange} />
        <input
          type="text"
          name="theme"
          placeholder="Theme (optional)"
          onChange={handleChange}
          value={formData.theme}
        />
        <textarea
          name="content"
          placeholder="Content"
          onChange={handleChange}
          value={formData.content}
        />
        <textarea
          name="caption"
          placeholder="Caption"
          onChange={handleChange}
          value={formData.caption}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NewPostModal;
