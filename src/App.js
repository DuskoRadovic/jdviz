import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const readFileOnUpload = uploadedFile => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      try {
        const result = JSON.parse(fileReader.result);
        setData(prevState => [...prevState, ...result]);
      } catch (e) {
        console.log(e.message);
      }
    };
    if (uploadedFile !== undefined) {
      fileReader.readAsText(uploadedFile);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={e => readFileOnUpload(e.target.files[0])} />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
