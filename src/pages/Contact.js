import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({
      name: e.target.value,
    });
  };

  return (
    <>
      <h1>Form to be submitted</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formData.name}
        <button>submit</button>
      </form>
    </>
  );
}
