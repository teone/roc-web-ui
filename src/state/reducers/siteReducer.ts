import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import * as _ from "lodash";

export interface Site {
  id: string;
  name: string;
  country?: string;
  devices: unknown[];
  slices: unknown[];
  alerts: number;
  image?: string;
}

// Define a type for the slice state
interface SiteState {
  sites: Site[];
  siteSelected: string;
}

// Define the initial state using that type
// TODO load this data via graphQl
const initialState: SiteState = {
  sites: [
    {
      id: "berlin",
      name: "Berlin",
      country: "DE",
      devices: [],
      slices: [],
      alerts: 0,
      image: "https://chronos-dev.onlab.us/chronos-exporter/images/berlin-deutschland.png"
    },
    {
      id: "freemont",
      name: "Freemont",
      country: "CA",
      devices: [],
      slices: [],
      alerts: 1,
      image: "https://chronos-dev.onlab.us/chronos-exporter/images/los-angeles-us.png"
    },
    {
      id: "bengaluru",
      name: "Bengaluru",
      country: "IN",
      devices: [],
      slices: [],
      alerts: 0,
      image: "https://chronos-dev.onlab.us/chronos-exporter/images/bengaluru-india.png"
    },
  ],
  siteSelected: "berlin",
};

export const siteSlice = createSlice({
  name: "sites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.siteSelected = action.payload;
    },
  },
});

export const { select } = siteSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedSite = (state: RootState) => {
  const site = _.find(state.sites.sites, { id: state.sites.siteSelected });
  return _.isNil(site) ? state.sites.sites[0] : site;
};
export const allSites = (state: RootState) => state.sites.sites;

export default siteSlice.reducer;
