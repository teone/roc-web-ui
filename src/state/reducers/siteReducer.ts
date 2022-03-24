import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  LoadingStatus,
  StateFailed,
  StateIdle,
  StateLoading,
  StateSucceded,
} from "../loadStatuses";
import * as _ from "lodash";
import { gQLClient } from "../../api/gql-client";
import { gql } from "@apollo/client";
import { Site } from "../../types";

// Define a type for the slice state
interface SiteState {
  sites: Site[];
  loadingStatus: LoadingStatus;
  loadingError: string | undefined;
  siteSelected: string | undefined;
}

// Define the initial state using that type
const initialState: SiteState = {
  sites: [],
  loadingStatus: StateIdle,
  siteSelected: undefined,
  loadingError: undefined,
};

const gQLSiteQuery = gql`
  query GetSites {
    site {
      id
      name
      image
      alerts
      slices {
        id
      }
      simCards {
        name
      }
      simCardsCount
    }
  }
`;

export const loadSites = createAsyncThunk("sites/load", async () => {
  const response = await gQLClient.query<unknown, Site[]>("site", gQLSiteQuery);
  return response;
});

export const siteSlice = createSlice({
  name: "sites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.siteSelected = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadSites.pending, (state) => {
        state.loadingStatus = StateLoading;
      })
      .addCase(loadSites.fulfilled, (state, action) => {
        state.loadingStatus = StateSucceded;
        state.sites = action.payload;
        state.siteSelected =
          action.payload.length > 0 ? action.payload[0].id : undefined;
      })
      .addCase(loadSites.rejected, (state, action) => {
        state.loadingStatus = StateFailed;
        state.loadingError = action.error.message;
      });
  },
});

export const { select } = siteSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedSite = (state: RootState) => {
  const site = _.find(state.sites.sites, { id: state.sites.siteSelected });
  return _.isNil(site) ? null : site;
};
export const allSites = (state: RootState) => state.sites.sites;
export const siteLoadStatus: (state: RootState) => LoadingStatus = (
  state: RootState
) => state.sites.loadingStatus;

export default siteSlice.reducer;
