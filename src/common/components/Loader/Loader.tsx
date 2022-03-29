import React, { FC } from "react";
import "./Loader.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <div className="Loader" data-testid="Loader">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
