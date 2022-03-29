import React, { FC, useEffect } from "react";
import "./SiteSelector.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  allSites,
  loadSites,
  select,
  selectedSite,
  siteLoadStatus,
} from "../../../../state/reducers/siteReducer";
import deviceSvg from "../../../../assets/AdminPanel/device.svg";
import sliceSvg from "../../../../assets/AdminPanel/slices.svg";
import serviceSvg from "../../../../assets/AdminPanel/service.svg";
import redAlertSvg from "../../../../assets/AdminPanel/red-alert.svg";
import blueAlertSvg from "../../../../assets/AdminPanel/alert.svg";
import selectGraySvg from "../../../../assets/AdminPanel/select.svg";
import selectBlueSvg from "../../../../assets/AdminPanel/selected-card.svg";
import { StateIdle, StateLoading } from "../../../../state/loadStatuses";
import { Scalars, Site } from "../../../../types";
import Loader from "../../../../common/components/Loader/Loader";

interface DashboardProps {}

const SiteSelector: FC<DashboardProps> = () => {
  const site = useAppSelector(selectedSite);
  const sites = useAppSelector(allSites);
  const loadStatus = useAppSelector(siteLoadStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loadStatus === StateIdle) {
      dispatch(loadSites());
    }
  }, [siteLoadStatus, dispatch]);

  const onSelectCard = (site: Site) => {
    dispatch(select(site.id));
  };

  const getImageFromSiteId = (id: Scalars["ID"]) => {
    // /chronos-exporter/images/los-angeles-us.png
    const baseUrl = "https://chronos-dev.onlab.us/chronos-exporter/images";
    let img;
    switch (id) {
      case "starbucks-newyork":
      case "starbucks-seattle":
        img = "berlin-deutschland.png";
        break;
      case "acme-chicago":
        img = "los-angeles-us.png";
        break;
      default:
        img = "bengaluru-india.png";
    }
    return `${baseUrl}/${img}`;
  };

  const getAlertsFromSiteId = (id: Scalars["ID"]) => {
    return 1;
  };

  const content = sites.map((s, i) => (
    <React.Fragment key={`site-${s.id}`}>
      <div className="col-xl-3 col-lg-5 col-md-6 col-sm-7 ctm-cols">
        <div
          className={`card card-stats ${
            site && site.id === s.id ? "card-selected mat-elevation-z4" : ""
          }`}
          onClick={() => onSelectCard(s)}
        >
          <div
            style={{ backgroundImage: `url(${getImageFromSiteId(s.id)})` }}
            className="card-header card-header-warning card-header-icon card-header-bg"
          >
            <h3 className="card-title">{s.name}</h3>
            <div
              className={`${
                getAlertsFromSiteId(s.id) === 0 ? "success-bx" : "alert-bx"
              }`}
            >
              {getAlertsFromSiteId(s.id) === 0 ? "HEALTHY" : "ALERT"}
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
                      {s.devices ? s.devices.length : 0} Devices
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
                    <p className="">{s.slices ? s.slices.length : 0} Slices</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-bx">
                  <div className="card-icon">
                    <img src={serviceSvg} />
                  </div>
                  <div className="card-category">
                    <p className="">0 Services</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-bx">
                  <div className="card-icon">
                    <img
                      src={
                        getAlertsFromSiteId(s.id) === 0
                          ? blueAlertSvg
                          : redAlertSvg
                      }
                    />
                  </div>
                  <div className="card-category">
                    <p>{getAlertsFromSiteId(s.id)} Alerts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="check-box-container">
              <img
                src={site && site.id === s.id ? selectBlueSvg : selectGraySvg}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ));

  if (loadStatus === StateLoading) {
    return <Loader />;
  }

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
