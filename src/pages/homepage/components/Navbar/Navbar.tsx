import React, { FC, useState } from "react";
import "./Navbar.scss";
import spinner from "../../../../assets/Navbar/spinner-alt.svg";
import tesla from "../../../../assets/Navbar/tesla-big.svg";
import searchIcon from "../../../../assets/Navbar/search.svg";
import searchInBox from "../../../../assets/Navbar/search-in-box.svg";
import searchClose from "../../../../assets/Navbar/search-close.svg";
import notification from "../../../../assets/Navbar/notifications.svg";
import notificationDot from "../../../../assets/Navbar/notification-alert-dot.svg";
import profilePic from "../../../../assets/Navbar/profile-pic.svg";
import dropdownArrow from "../../../../assets/Navbar/dropdown-down-arrow.svg";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [trigger, setTrigger] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [alert, setAlert] = useState("berlino");
  const route = "/"; // FIXME use react router

  const toggleCompanyMenu = () => {
    setCompanyMenu(!companyMenu);
  };

  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const toggleTrigger = () => {
    setTrigger(!trigger);
  };

  const notificationBell = (
    <div className="my-auto">
      <img src={notification} />
    </div>
  );

  const notificationBellWithDot = (
    <div className="my-auto">
      <img src={notification} />
      <sup>
        <sup>
          <sup>
            <sup>
              <img src={notificationDot} />
            </sup>
          </sup>
        </sup>
      </sup>
    </div>
  );

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light aether-bgColor">
        {/*Logo*/}
        <div className="container-fluid aether-bgColor">
          <div className="col-5 d-flex">
            <a className="aether-title aether-bgColor" href="#">
              Aether 5G
              <sup className="aether-bgColor">
                <sup>
                  <sup>
                    <img src={spinner} />
                  </sup>
                </sup>{" "}
              </sup>
            </a>
          </div>
          <div className="d-flex">
            {/*Enterprise Selection*/}
            <div
              className={`nav-item aether-bgColor ${
                trigger ? "aether-dropdown-alignment" : ""
              }`}
            >
              <img
                className={`aether-bgColor aether-companyTitle ${
                  trigger ? "aether-companyTitle-Alignment" : "mr2-5-only"
                }`}
                src={tesla}
                onClick={toggleCompanyMenu}
              />
            </div>
            {/*Search Form*/}
            <div className="">
              {trigger ? (
                <form className="d-flex aether-SearchBox-Alignment aether-SearchBox-bgColor">
                  <img
                    className="ml1-only aether-SearchBox-bgColor"
                    src={searchInBox}
                  />
                  <input
                    className="
              form-control
              me-2
              aether-SearchBox aether-SearchBox-bgColor
              pb-2
            "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img
                    className="mx-3 aether-SearchBox-bgColor"
                    src={searchClose}
                    onClick={toggleTrigger}
                  />
                </form>
              ) : (
                ""
              )}{" "}
            </div>
            {/*Search Toggle*/}
            <div>
              <div className="mx-auto aether-bgColor" onClick={toggleTrigger}>
                {trigger ? (
                  ""
                ) : (
                  <img
                    src={searchIcon}
                    className={`aether-navbar-bg-color ${
                      trigger ? "" : "ml2-only"
                    }`}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="ml-only d-flex col-2">
            {/*Notification*/}
            {alert === "berlin" ? notificationBell : notificationBellWithDot}
            {/*Profile*/}
            <div className="mx-auto my-auto" onClick={toggleProfileMenu}>
              <img src={profilePic} />
              <img className="mx-3" src={dropdownArrow} />
            </div>
            <div>
              {route === "/" ? (
                <button className="btn btn-primary">Controls</button>
              ) : (
                <button className="btn btn-primary">Dashboard</button>
              )}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
