import { useState } from "react";
function Child({ age }) {
  const [name, setName] = useState("raviteja");
  // age = 60;
  return (
    <>
      <p>This is child component</p>
      {name}
      <button onClick={() => setName("ratnakar")}>click me</button>
      {age}
    </>
  );
}

export default Child;
