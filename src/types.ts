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
  name?: Maybe<Scalars['String']>;
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  simCard?: Maybe<Scalars['ID']>;
};

export type Enterprise = {
  __typename?: 'Enterprise';
  applications: Array<Application>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sites: Array<Site>;
};

export type Query = {
  __typename?: 'Query';
  enterprises: Array<Enterprise>;
  simCards: Array<SimCard>;
  site: Array<Site>;
};

export type SimCard = {
  __typename?: 'SimCard';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Site = {
  __typename?: 'Site';
  alerts?: Maybe<Scalars['Int']>;
  devices: Array<Device>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  simCards: Array<SimCard>;
  simCardsCount: Scalars['Int'];
  slices: Array<Slices>;
};

export type Slices = {
  __typename?: 'Slices';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};
