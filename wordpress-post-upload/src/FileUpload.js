// FileUpload.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function FileUpload({ setPostsData }) {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setPostsData(jsonData); // Pass the parsed data to parent component
    };
    reader.readAsBinaryString(uploadedFile);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
}

export default FileUpload;
