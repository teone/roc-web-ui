import React, { FC } from "react";
import "./SiteSelector.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  allSites, select,
  selectedSite,
  Site
} from "../../../../state/reducers/siteReducer";
import deviceSvg from "../../../../assets/AdminPanel/device.svg";
import sliceSvg from "../../../../assets/AdminPanel/slices.svg";
import serviceSvg from "../../../../assets/AdminPanel/service.svg";
import redAlertSvg from "../../../../assets/AdminPanel/red-alert.svg";
import blueAlertSvg from "../../../../assets/AdminPanel/alert.svg";
import selectGraySvg from "../../../../assets/AdminPanel/select.svg"
import selectBlueSvg from "../../../../assets/AdminPanel/selected-card.svg"

interface DashboardProps {}

const SiteSelector: FC<DashboardProps> = () => {
  const site = useAppSelector(selectedSite);
  const sites = useAppSelector(allSites);
  const dispatch = useAppDispatch()

  const onSelectCard = (site: Site) => {
    dispatch(select(site.id))
  };

  const content = sites.map((s, i) => (
    <React.Fragment key={`site-${s.id}`}>
      <div className="col-xl-3 col-lg-5 col-md-6 col-sm-7 ctm-cols">
        <div
          className={`card card-stats ${
            site.id === s.id ? "card-selected mat-elevation-z4" : ""
          }`}
          onClick={() => onSelectCard(s)}
        >
          <div style={{ backgroundImage: `url(${s.image})` }} className="card-header card-header-warning card-header-icon card-header-bg">

            <h3 className="card-title">{s.name}</h3>
            <div className={`${s.alerts === 0 ? 'success-bx' : 'alert-bx'}`}>
              {s.alerts === 0 ? 'HEALTHY' : 'ALERT'}
            </div>
          </div>
          <div className="card-body card-body-bx">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-bx">
                  <div className="card-icon">
                    <img src={deviceSvg} />
                  </div>
                  <div className="card-category">
                    <p className="">
                      {s.devices.length} Devices
                      <span>10 Unprovisioned</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-bx">
                  <div className="card-icon">
                    <img src={sliceSvg} />
                  </div>
                  <div className="card-category">
                    <p className="">{s.slices.length} Slices</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-bx">
                  <div className="card-icon">
                    <img src={serviceSvg} />
                  </div>
                  <div className="card-category">
                    <p className="">
                      {/*{{ getTotalService(site.slices, sitesResponse.applications) }}*/}
                      Services
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-bx">
                  <div className="card-icon">
                    <img src={s.alerts === 0 ? blueAlertSvg : redAlertSvg} />
                  </div>
                  <div className="card-category">
                    <p>{s.alerts} Alerts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="check-box-container">
              <img src={site.id === s.id ? selectBlueSvg : selectGraySvg} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ));

  return (
    <div className="SiteSelector" data-testid="SiteSelector">
      <div className="bg-gray">
        <div className="container-fluid ctm-container">
          <div className="row ctm-row">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default SiteSelector;
