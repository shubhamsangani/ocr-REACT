import React, { useContext } from "react";
import { ImageContext } from "./GetImage";
import Style from './ShowResult.module.css'
const ShowResult = () => {
  const Context = useContext(ImageContext);
  return (
    <div className={Style.ShowResult}>
      <h2>result screen</h2>
      <div>{Context.response ? <pre value='test' >{Context.response}</pre> : null}</div>
    </div>
  );
};


export default ShowResult;
