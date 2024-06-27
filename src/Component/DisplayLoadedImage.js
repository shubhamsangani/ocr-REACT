import React, { useContext } from "react";
import { ImageContext } from "./GetImage";
import Style from "./DisplayLoadedImage.module.css";
const DisplayLoadedImage = () => {
  const context = useContext(ImageContext);
  return (
    <div className={Style.parent}>
      <div className={Style.heading}>
        <h1>LoadedImage</h1>
        <p>this is your image to extract text from</p>
        <p>when you upload an image, it will appear below here </p>
      </div>

          <div className={Style.imgHolder}>
              <h3>image</h3>
        {context.image ? <img src={context.image} alt='loadedImage' /> : null}
      </div>
    </div>
  );
};



export default DisplayLoadedImage;
