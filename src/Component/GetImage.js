import React, { useState } from "react";
import Tesseract from "tesseract.js";
import DisplayLoadedImage from "./DisplayLoadedImage";
import ShowResult from "./ShowResult";
import Style from "./GetImage.module.css";
import LoadingComponent from "./Loading";
export const ImageContext = React.createContext();

const GetImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [hasFinishedScanning, sethasFinishedScanning] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    e.preventDefault();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleScan = async () => {
    setIsScanning(true);
    setisLoading(true);
    sethasFinishedScanning(false);
    const {
      data: { text },
    } = await Tesseract.recognize(imageUrl);
    setResult(text);
    setIsScanning(false);
    setisLoading(false);
    sethasFinishedScanning(true);
  };

  return (
    <ImageContext.Provider value={{ image: imageUrl, response: result }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className='heading'>
          <h1>This is optical Character Recognition App (OCR) </h1>
          <p>please select image below to extract text from it.</p>
        </div>
        <div className={Style.IS}>
          <input type='file' onChange={handleImageUpload} accept='image/*' />
          <button onClick={handleScan} disabled={isScanning || !imageUrl}>
            Scan
          </button>
        </div>

        <div className={Style.DS}>
          {!hasFinishedScanning && (
            <>
              <DisplayLoadedImage />
            </>
          )}

          {isLoading ? (
            <LoadingComponent />
          ) : (
            <>
              <ShowResult />
            </>
          )}
        </div>
      </div>
    </ImageContext.Provider>
  );
};

export default GetImage;
