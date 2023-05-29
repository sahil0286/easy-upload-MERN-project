import React from 'react'

export const Steps = () => {
  return (
  <>
  <div style={{height:"280px"}}>
  </div>
    <div className="container my-100 px-4 py-5">
    <h2 className="pb-3 border-bottom text-center ">How to send and share files link with Easy Upload?</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4>Step 1: Upload File</h4>
          <ul>
            <li>Click on the "Upload" button to initiate the file upload process.</li>
            <li>Select the desired file from your local device to be uploaded.</li>
          </ul>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4>Step 2: Generate Link</h4>
          <ul>
            <li>After the file is successfully uploaded, a unique shareable link will be generated.</li>
            <li>The link will be displayed on the screen, ready to be copied.</li>
          </ul>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4>Step 3: Copy Link for Sharing/Download</h4>
          <ul>
            <li>Click on the "Copy" button to copy the generated shareable link to the clipboard.</li>
            <li>You can now paste the link into emails, messages, or any other platform to share or download the uploaded file.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
