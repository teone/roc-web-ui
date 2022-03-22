import React, { FC } from "react";
import "./SiteView.scss";

interface SiteViewProps {}

const SiteView: FC<SiteViewProps> = () => (
  <div className="SiteView" data-testid="SiteView">
    <div className="container-fluid ctm-container bottom_bx">
      <div className="row">Bottom content here</div>
    </div>
  </div>
);

export default SiteView;
