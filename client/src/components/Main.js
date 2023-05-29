import React from "react";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";
import logo from "../media/easy-upload-logo.png";

function Main() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  console.log(file.name);

  const copyLink=(text)=>{
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Copyed!!");
  }
  return (
    <>
      <div className="container my-5">
        <div className="p-5 text-center  rounded-3">
          <div className="d-flex justify-content-center ">
            <img
              src={logo}
              alt="easy-upload-logo"
              className=""
              width="100"
              height="100"
            />
            <h1 className="mt-3 ms-3 ">Easy Upload</h1>
          </div>
          <h3 className="text-body-emphasis">
            Upload and have your files travel for free
          </h3>
          <div className="d-inline-flex gap-2 mb-5 mt-3">
            <button
              onClick={() => onUploadClick()}
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              type="button"
            >
              Upload File
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="row">
            <div className="input-group mb-3 col align-self-center">
              <input type="text" style={{width:"50%"}} className="form-control " placeholder="To get Download Link Upload File" value={result} />
              <button className="input-group-text" onClick={()=>{copyLink(result)}}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
