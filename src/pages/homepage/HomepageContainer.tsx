import React, { FC } from 'react';
import './HomepageContainer.scss';
import SiteSelector from "./components/SiteSelector/SiteSelector";
import SiteView from "./components/SiteView/SiteView";

interface HomepageContainerProps {}

const HomepageContainer: FC<HomepageContainerProps> = () => (
  <div className="HomepageContainer" data-testid="HomepageContainer">
    <div className="main-content">
      <SiteSelector/>
      <SiteView/>
    </div>
  </div>
);

export default HomepageContainer;
