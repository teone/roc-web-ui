export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['ID'];
  name: Scalars['String'];
  simCard: SimCard;
};

export type DeviceGroup = {
  __typename?: 'DeviceGroup';
  devices: Array<Device>;
  id: Scalars['ID'];
  name: Scalars['String'];
  slice?: Maybe<Slice>;
};

export type Enterprise = {
  __typename?: 'Enterprise';
  applications: Array<Application>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sites: Array<Site>;
};

export type Query = {
  __typename?: 'Query';
  applications: Array<Application>;
  deviceGroups: Array<DeviceGroup>;
  devices: Array<Device>;
  enterprises: Array<Enterprise>;
  simCards: Array<SimCard>;
  sites: Array<Site>;
  slices: Array<Slice>;
  smallCells: Array<SmallCell>;
};

export type SimCard = {
  __typename?: 'SimCard';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Site = {
  __typename?: 'Site';
  description: Scalars['String'];
  devices: Array<Device>;
  id: Scalars['ID'];
  name: Scalars['String'];
  simCards: Array<SimCard>;
  slices: Array<Slice>;
  smallCells: Array<SmallCell>;
};

export type Slice = {
  __typename?: 'Slice';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SmallCell = {
  __typename?: 'SmallCell';
  id: Scalars['ID'];
  name: Scalars['String'];
};
