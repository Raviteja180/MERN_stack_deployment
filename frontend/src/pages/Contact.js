import { useState } from "react";
import axios from "axios";
export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  // });
  const [username, setFormData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch(
    //   "https://mern-stack-deployment2-api.vercel.app/api",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   }
    // );
    axios.defaults.withCredentials = true;
    axios
      .post("https://mern-stack-deployment-eight.vercel.app/api", { username })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    // console.log(response);
  };
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <h1>Form to be submitted</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={username}
          onChange={handleChange}
        />
        {username}
        <button>submit</button>
      </form>
    </>
  );
}
