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
              Upload
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              Secondary link
            </button>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="To get Link Upload File" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span className="input-group-text" id="basic-addon2">Copy</span>
            </div>
            <a href={result}>{result}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
