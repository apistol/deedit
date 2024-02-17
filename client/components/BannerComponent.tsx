import React from "react";
import classNames from "classnames";

const BannerComponent = ({
  title,
  subTitle,
  titleClass,
  subClass,
  containerClass,
}) => {
  return (
    <div className={`h-400 flex justify-center items-center ${containerClass}`}>
      <div>
        <p className={`${titleClass} text-9xl font-extrabold leading-1`}>
          {title}
        </p>
        <p className={`${subClass} text-9xl font-extrabold leading-1`}>
          {subTitle}
        </p>
      </div>
      <div
        style={{
          height: 200,
          width: 350,
          backgroundImage: "url('/assets/contribuie.svg')",
          backgroundRepeat: "no-repeat",
          cursor: "pointer",
          backgroundPosition: "bottom left",
        }}
        onClick={() => alert("adas")}
      ></div>
    </div>
  );
};
export default BannerComponent;
