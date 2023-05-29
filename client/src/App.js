import { useEffect, useRef, useState } from "react";
import './App.css';
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef= useRef();



  const onUploadClick=()=>
  {
    fileInputRef.current.click();
  }
  console.log(file.name)
  return (
    <>
      <h1>Simple File Sharing!</h1>
      <p>Upload and share the download Link</p>
      <button onClick={()=>onUploadClick()}>Upload</button>
      <input type="file" ref={fileInputRef} style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])} />
      <a href={result}>{result}</a>
    </>
  );
}

export default App;
