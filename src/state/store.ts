import { applyMiddleware, combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { siteSlice } from "./reducers/siteReducer";
import { createGQLClient } from "./gql-client";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

export const store = configureStore(
  {
    reducer: {
      sites: siteSlice.reducer,
    },
  }
);
//
// const finalCompose = composeWithDevTools({
//       trace: process.env.NODE_ENV !== 'production'
//     })
//
// const rootReducer = combineReducers({
//   sites: siteSlice.reducer
// })
//
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk.withExtraArgument({ client: createGQLClient() })),
//
// )

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
