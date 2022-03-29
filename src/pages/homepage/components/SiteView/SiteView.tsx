import React, { FC, useState } from "react";
import "./SiteView.scss";
import { useAppSelector } from "../../../../hooks";
import { selectedSite } from "../../../../state/reducers/siteReducer";
import {
  Accordion,
  AccordionSummary,
  ToggleButton,
  ToggleButtonGroup, Typography
} from "@mui/material";
import _ from "lodash";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SiteViewProps {}

const logical = "logical";
const physical = "physical";

const SiteView: FC<SiteViewProps> = () => {
  const site = useAppSelector(selectedSite);
  const [expanded, setExpanded] = useState(false);
  const [expandedPanel, setExpandedPanel] = useState<string | false>("");
  const [viewType, setViewType] = useState(logical);

  const handleViewType = (
    event: React.MouseEvent<HTMLElement>,
    type: string
  ) => {
    setViewType(type);
  };

  const handleExpandedPanel =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : false);
    };

  let slices = null;
  if (!_.isNil(site)) {
    slices = site.slices.map((slice) => (
      <React.Fragment key={slice.id}>
        <Accordion
          expanded={expanded || expandedPanel == slice.id}
          onChange={handleExpandedPanel(slice.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {slice.name}
            </Typography>
          </AccordionSummary>
        </Accordion>
      </React.Fragment>
    ));
  }

  return (
    <div className="SiteView" data-testid="SiteView">
      <div className="container-fluid ctm-container bottom_bx">
        <div className="row">
          <div className="col-md-4 col-sm-6">Throughput</div>
          <div className="col-md-4 col-sm-6">Packet Loss</div>
          <div className="col-md-4 col-sm-6">Highlisht</div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="site-visite-bx">
              <div className="section-h">
                <h4>
                  Site View&nbsp;
                  <span>
                    {expanded ? (
                      <a onClick={() => setExpanded(false)}>Collapse</a>
                    ) : (
                      <a onClick={() => setExpanded(true)}>Expand All</a>
                    )}
                  </span>
                </h4>
              </div>
              <div className="section-tabs">
                <ToggleButtonGroup
                  exclusive
                  value={viewType}
                  onChange={handleViewType}
                  className="section-group-btn"
                >
                  <ToggleButton value={logical}>Logical</ToggleButton>
                  <ToggleButton value={physical}>Physical</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="nomarLR mt-1 float-left col-lg-12 ctm_new_component">
            {slices}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteView;
