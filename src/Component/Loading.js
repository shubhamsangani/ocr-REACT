import React from "react";
import Style from "./Loading.module.css";
const LoadingComponent = () => {
  return (
    <div className={Style.loading_container}>
      <div className={Style.loading_text}>Scanning...</div>
      <div className={Style.loading_indicator}>
        <div className={Style.spinner}></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
