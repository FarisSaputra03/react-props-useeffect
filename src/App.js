import React, { useState, useEffect } from "react";
// import Introduction from "./components/introduction";
// import Profil from "./components/profil";

function App() {
  const [pacarSaya, setPacarSaya] = useState(1);
  const [namaPacar, setNamaPacar] = useState("");
  const kurangPacar = () => {
    if (pacarSaya > 1) {
      setPacarSaya((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("si imut");
    } else{
      setNamaPacar("cihuyyy")
    }
  }, [pacarSaya]);

  return (
    <>
      <h5>nama pacar: {namaPacar}</h5>
      <h1>saya memiliki: {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>
        tambah pacar
      </button>
      <button onClick={kurangPacar}>putuskan pacar</button>
      {/* <Profil /> */}
      {/* <Introduction name="faris" />
      <Introduction name="taranka" /> */}
    </>
  );
}

export default App;
