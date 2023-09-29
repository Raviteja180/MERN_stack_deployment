// import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Child from "./components/child";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Child2Component from "./components/child2";

function App() {
  const [age, setAge] = useState(10);
  return (
    <>
      <h1>Raviteja</h1>
      <button
        onClick={() => {
          setAge(age + 10);
        }}
      >
        Click to change age
      </button>
      {age}
      <Child age={age} />
      <Child2Component />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
